import React from "react";
import { useRouter } from "next/router";
import useStore from "../../../ions/useStore";
import { SmallLogo } from "../../../molecules/small-logo";
import Button from "../../../atoms/button";
import { CopyLink } from "../../../molecules/copy-link";
import { PlayerOverview } from "../../../molecules/player-overview";
import { StyledFieldset } from "../../../ions/styles";
import Form from "../../../molecules/form/join";

const Page = () => {
	const name = useStore(state => state.name);
	const {
		query: { channel },
	} = useRouter();

	if (name) {
		return (
			<>
				<SmallLogo />
				<CopyLink value={channel} />
				<PlayerOverview>{name}</PlayerOverview>
				<StyledFieldset>
					<Button>Start Game</Button>
				</StyledFieldset>
			</>
		);
	}
	return <Form />;
};

export default Page;

export const getServerSideProps = () => {
	return {
		props: {},
	};
};
