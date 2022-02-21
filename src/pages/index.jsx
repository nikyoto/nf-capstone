import Head from "next/head";
import React from "react";
import { StyledAppBackground } from "../ions/styles";
import { ExtendedLogo } from "../molecules/extended-logo";
import Form from "../molecules/form";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Hoo - Who would rather?</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<StyledAppBackground>
				<ExtendedLogo height="147px" width="147px" placeholder="empty" />
				<Form />
			</StyledAppBackground>
		</Layout>
	);
};

export default Page;
