import React from "react";
import { useRouter } from "next/router";
import useStore from "../../../ions/useStore";
import { SmallLogo } from "../../../molecules/small-logo";
import Button from "../../../atoms/button";
import { CopyLink } from "../../../molecules/copy-link";

const Page = () => {
	const name = useStore(state => state.name);
	const {
		query: { id },
	} = useRouter();

	return (
		<>
			<SmallLogo />
			<CopyLink value={id} />
			<h2>Hello {name}</h2>
			<Button>Start</Button>
		</>
	);
};

export default Page;
