import { usePubNub } from "pubnub-react";
import React, { useState } from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import { StyledAppBackground, StyledFieldset } from "../../ions/styles";
import useStore from "../../ions/useStore";
import { ExtendedLogo } from "../extended-logo";

const Form = () => {
	const [value, setValue] = useState("");
	const channels = useStore(state => state.channels);
	const setJoined = useStore(state => state.setJoined);
	const pubnub = usePubNub();

	const handleSubmit = async event_ => {
		event_.preventDefault();
		console.log("Joining lobby..", value);
		pubnub.subscribe({ channels, withPresence: true });
		setTimeout(async () => {
			await pubnub.setState({
				channels,
				state: {
					name: value,
					isLeader: false,
				},
			});
			setJoined(true);
		}, 3_000);
	};

	return (
		<StyledAppBackground>
			<ExtendedLogo height="147px" width="147px" placeholder="empty" />
			<form onSubmit={handleSubmit}>
				<StyledFieldset>
					<Input
						type="text"
						value={value}
						placeholder="Enter your name"
						aria-label="name"
						maxLength="12"
						onChange={event_ => {
							setValue(event_.target.value);
						}}
					/>
					<Button type="submit">Join Lobby</Button>
				</StyledFieldset>
			</form>
		</StyledAppBackground>
	);
};

export default Form;
