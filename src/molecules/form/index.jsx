import { StyledFieldset } from "../../ions/styles";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Form = () => {
	const [value, setValue] = useState("");
	const router = useRouter();
	const handleSubmit = () => {
		router.push({
			pathname: "/lobby/123",
		});
	};

	//console.log(router);
	//return null;

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
					value={value}
					placeholder="Enter your name"
					aria-label="name"
					maxLength="12"
					onChange={event_ => {
						setValue(event_.target.value);
					}}
				/>
				<Button type="submit">Start Lobby</Button>
			</StyledFieldset>
		</form>
	);
};

export default Form;
