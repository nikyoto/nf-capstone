import { useRouter } from "next/router";
import { usePubNub } from "pubnub-react";
import React, { useCallback, useEffect } from "react";
import Button from "../../../atoms/button";
import { randomQuestion } from "../../../ions/randomQuestion/randomQuestion";
import { StyledFieldset } from "../../../ions/styles";
import useStore from "../../../ions/useStore";
import { CopyLink } from "../../../molecules/copy-link";
import Form from "../../../molecules/form/join";
import { PlayerOverview } from "../../../molecules/player-overview";
import { PlayerVote } from "../../../molecules/player-vote";
import { QuestionCard } from "../../../molecules/question-card";
import { SmallLogo } from "../../../molecules/small-logo";

const Page = () => {
	const {
		query: { channel },
	} = useRouter();
	const channels = useStore(state => state.channels);
	const joined = useStore(state => state.joined);
	const setJoined = useStore(state => state.setJoined);
	const players = useStore(state => state.players);
	const started = useStore(state => state.started);
	const setStarted = useStore(state => state.setStarted);
	const pubnub = usePubNub();

	/* Callbacks */

	const handlePresence = useCallback(event_ => {
		const { addPlayer, removePlayer, updatePlayer } = useStore.getState();
		console.log(event_.action, "DANWDIOAWHDOAWH");
		switch (event_.action) {
			case "join":
				console.log("Join", event_);
				addPlayer({ name: "Guest", id: event_.uuid });
				break;
			case "leave":
				console.log("Leave", event_);
				removePlayer(event_.uuid);
				break;
			case "state-change":
				console.log("state-change", event_);
				updatePlayer(event_.uuid, {
					name: event_.state.name,
					isLeader: event_.state.isLeader,
				});
				break;
			default:
				break;
		}
	}, []);

	/* Side Effects */

	useEffect(() => {
		const { setChannels } = useStore.getState();
		const { setStarted } = useStore.getState();
		setChannels([channel]);
		setStarted(false);
	}, [channel]);

	useEffect(() => {
		const listeners = { presence: handlePresence };
		pubnub.addListener(listeners);

		return () => {
			pubnub.removeListener(listeners);
		};
	}, [pubnub, channels, handlePresence]);

	useEffect(() => {
		const { setPlayers } = useStore.getState();
		if (pubnub && channels.length > 0) {
			pubnub.hereNow({ channels, includeState: true, includeUUIDs: true }).then(response => {
				const { occupants } = response.channels[channels[0]];
				setPlayers(
					occupants
						.filter(occupant => {
							return Boolean(occupant.state?.name);
						})
						.map(occupant => ({
							name: occupant.state.name,
							isLeader: occupant.state.isLeader,
							id: occupant.uuid,
						}))
				);
			});
		}
	}, [pubnub, channels]);

	if (started) {
		return (
			<div>
				<SmallLogo />
				<QuestionCard />
				<PlayerVote players={players} />
			</div>
		);
	} else if (joined) {
		return (
			<>
				<SmallLogo />
				<CopyLink value={channel} />
				<PlayerOverview />
				<StyledFieldset>
					<Button
						onClick={() => {
							console.log("Leaving...");
							pubnub.unsubscribe({ channels });
							setJoined(false);
						}}
					>
						Leave Lobby
					</Button>
					<Button
						onClick={() => {
							setStarted(true);
							void randomQuestion();
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
