import { useRouter } from "next/router";
import { usePubNub } from "pubnub-react";
import React, { useCallback, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Button from "../../../atoms/button";
import { StyledFieldset } from "../../../ions/styles";
import useStore from "../../../ions/useStore";
import { CopyLink } from "../../../molecules/copy-link";
import Form from "../../../molecules/form/join";
import { PlayerOverview } from "../../../molecules/player-overview";
import { SmallLogo } from "../../../molecules/small-logo";

const Page = () => {
	const joined = useStore(state => state.joined);
	const { query } = useRouter();
	const router = useRouter();
	const channels = useStore(state => state.channels);
	const handleMessage = useCallback(() => {
		console.log("Message received");
	}, []);

	const channel = query.channel;
	const pubnub = usePubNub();

	useEffect(() => {
		const { setChannels } = useStore.getState();
		setChannels([channel]);
	}, [channel]);

	/*const sendMessage = useCallback(
		message => {
			if (message) {
				return pubnub.publish({ channel, message });
			}
			return Promise.reject(new Error("Please provide a valid message."));
		},
		[pubnub, channel]
	);*/
	const handlePresence = useCallback(event_ => {
		const { addPlayer, removePlayer } = useStore.getState();
		switch (event_.action) {
			case "join":
				console.log("Join", event_);
				break;
			case "leave":
				console.log("Leave", event_);
				removePlayer(event_.uuid);
				break;
			case "state-change":
				console.log("state-change", event_);
				addPlayer({ name: event_.state?.name, id: event_.uuid });
				break;
			default:
				break;
		}
	}, []);
	useEffect(() => {
		const listeners = { message: handleMessage, presence: handlePresence };
		pubnub.addListener(listeners);
		pubnub.subscribe({ channels, withPresence: true });

		return () => {
			pubnub.unsubscribe({ channels });
			pubnub.removeListener(listeners);
		};
	}, [pubnub, channels, handleMessage, handlePresence]);

	useEffect(() => {
		const { setPlayers } = useStore.getState();
		if (pubnub && channels.length > 0) {
			pubnub.hereNow({ channels, includeState: true, includeUUIDs: true }).then(response => {
				console.log(response);
				const { occupants } = response.channels[channels[0]];
				console.log(occupants);
				setPlayers(
					occupants.map(occupant => ({
						name: occupant.state?.name ?? "Guest!!",
						id: occupant.uuid,
					}))
				);
			});
		}
	}, [pubnub, channels]);

	if (joined) {
		return (
			<>
				<SmallLogo />
				<CopyLink value={channel} />
				<PlayerOverview />
				<StyledFieldset>
					<Button
						onClick={() => {
							console.log("Leaving...");
						}}
					>
						Leave Lobby
					</Button>
					<Button
						onClick={() => {
							void router.push({
								pathname: `/lobby/${uuid()}/question`,
							});
						}}
					>
						Start Game
					</Button>
				</StyledFieldset>
			</>
		);
	}
	return <Form />;
};

export default Page;

export const getServerSideProps = () => {
	return {
		props: {},
	};
};
