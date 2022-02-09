import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import { ExtendedLogo } from "../molecules/extended-logo";
import { StyledAppBackground } from "../ions/styles";
import Form from "../molecules/form";

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
