import React from "react";
import { useRouter } from "next/router";
import useStore from "../../../ions/useStore";
import { SmallLogo } from "../../../molecules/small-logo";
import Button from "../../../atoms/button";
import { CopyLink } from "../../../molecules/copy-link";
import { PlayerOverview } from "../../../molecules/player-overview";

const Page = () => {
	const name = useStore(state => state.name);
	const {
		query: { id },
	} = useRouter();

	return (
		<>
			<SmallLogo />
			<CopyLink value={id} />
			<PlayerOverview>{name}</PlayerOverview>
			<Button>Start</Button>
		</>
	);
};

export default Page;
