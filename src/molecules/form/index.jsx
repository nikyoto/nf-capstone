import { useRouter } from "next/router";
import React from "react";
import { v4 as uuid } from "uuid";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import { StyledFieldset } from "../../ions/styles";

const Form = () => {
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
				<Input type="text" placeholder="Enter your name" aria-label="name" maxLength="12" />
				<Button type="submit">Start Lobby</Button>
			</StyledFieldset>
		</form>
	);
};

export default Form;
