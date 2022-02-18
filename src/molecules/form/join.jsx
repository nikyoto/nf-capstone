import { StyledAppBackground, StyledFieldset } from "../../ions/styles";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import React, { useState } from "react";
import useStore from "../../ions/useStore";
import { ExtendedLogo } from "../extended-logo";

const Form = () => {
	const [value, setValue] = useState("");
	const setName = useStore(state => state.setName);

	const handleSubmit = event_ => {
		event_.preventDefault();
		console.log("Joining lobby..", value);
		setName(value);
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
