import { StyledFieldset } from "../../ions/styles";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useStore from "../../ions/useStore";
import { v4 as uuid } from "uuid";

const Form = () => {
	const name = useStore(state => state.name);
	const setName = useStore(state => state.setName);
	const router = useRouter();

	const handleSubmit = event_ => {
		event_.preventDefault();
		void router.push({
			pathname: `/lobby/${uuid()}`,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<StyledFieldset>
				<Input
					type="text"
					value={name}
					placeholder="Enter your name"
					aria-label="name"
					maxLength="12"
					onChange={event_ => {
						setName(event_.target.value);
					}}
				/>
				<Button type="submit">Start Lobby</Button>
			</StyledFieldset>
		</form>
	);
};

export default Form;
