import { StyledFieldset } from "../../ions/styles";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useStore from "../../ions/useStore";

const Form = () => {
	const name = useStore(state => state.name);
	const setName = useStore(state => state.setName);
	const router = useRouter();

	const randomNumber = max => {
		return Math.floor(Math.random() * max);
	};

	const handleSubmit = () => {
		router.push({
			pathname: "/lobby/" + randomNumber(999999999999),
		});
	};

	return (
		<form
			onSubmit={event_ => {
				event_.preventDefault();
				handleSubmit();
			}}
		>
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
