import React from "react";
import { useRouter } from "next/router";
import useStore from "../../../ions/useStore";

const Page = () => {
	const name = useStore(state => state.name);
	const {
		query: { id },
	} = useRouter();

	return (
		<>
			<h1>Lobby: {id}</h1>
			<h2>{name}</h2>
		</>
	);
};

export default Page;
