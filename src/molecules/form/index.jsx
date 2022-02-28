import { useRouter } from "next/router";
import { usePubNub } from "pubnub-react";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import { pubnub } from "../../ions/pubnub";
import { StyledFieldset } from "../../ions/styles";
import useStore from "../../ions/useStore";

const Form = () => {
	const [value, setValue] = useState("");
	const channels = useStore(state => state.channels);
	const setJoined = useStore(state => state.setJoined);
	const pubnub = usePubNub();
	const {
		query: { channel },
		push,
	} = useRouter();

	useEffect(() => {
		const { setChannels } = useStore.getState();
		setChannels([uuid()]);
	}, [channel]);

	const handleSubmit = async event_ => {
		event_.preventDefault();
		console.log("Creating lobby..", value);
		void push({
			pathname: `/lobby/${[channels]}`,
		});
		pubnub.subscribe({ channels, withPresence: true });
		setJoined(true);
		setTimeout(async () => {
			await pubnub.setState({
				channels,
				state: {
					name: value,
					isLeader: true,
				},
			});
		}, 3_000);
	};

	return (
		<form onSubmit={handleSubmit}>
			<StyledFieldset>
				<Input
					required
					type="text"
					value={value}
					placeholder="Enter your name"
					aria-label="name"
					minLength="3"
					maxLength="12"
					onChange={event_ => {
						setValue(event_.target.value);
					}}
				/>
				<Button disabled={setJoined} type="submit">
					Start Lobby
				</Button>
			</StyledFieldset>
		</form>
	);
};

export default Form;
