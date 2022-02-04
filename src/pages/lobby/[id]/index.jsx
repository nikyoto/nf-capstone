import React from "react";
import { useRouter } from "next/router";

const Page = () => {
	const {
		query: { id },
	} = useRouter();

	return <h1>Lobby: {id}</h1>;
};

export default Page;
