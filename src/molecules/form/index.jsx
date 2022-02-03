import { StyledFieldset } from "../../ions/styles";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import React, { useState } from "react";

const Form = () => {
	const [value, setValue] = useState("");
	const [name, setName] = useState("");
	return (
		<form
			onSubmit={event_ => {
				event_.preventDefault();
				setName(value);
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
			{name ? <h2>Welcome {name}</h2> : null}
		</form>
	);
};

export default Form;
