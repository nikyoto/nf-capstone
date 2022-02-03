import Head from "next/head";
import React, { useState } from "react";
import Button from "../atoms/button";
import useGet from "../ions/hooks/fetch/get";
import Layout from "../organisms/layout";
import Input from "../atoms/input";
import ExtendedLogo from "../molecules/extended-logo";
import { StyledAppBackground, StyledFieldset } from "../ions/styles";

const Page = () => {
	const { loading, error } = useGet("/api/hello");
	const [value, setValue] = useState("");
	const [name, setName] = useState("");

	return (
		<Layout>
			<Head>
				<title key="title">Hoo - Who would rather?</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			{loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			<StyledAppBackground>
				<ExtendedLogo height="147px" width="147px" placeholder="empty" />
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
							onChange={event_ => {
								setValue(event_.target.value);
							}}
						/>
						<Button type="submit">Start Lobby</Button>
					</StyledFieldset>
				</form>
				{name ? <h2>Welcome {name}</h2> : <h2></h2>}
			</StyledAppBackground>
		</Layout>
	);
};

export default Page;
