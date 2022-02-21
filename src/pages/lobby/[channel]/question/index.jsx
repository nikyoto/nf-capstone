import React from "react";
import useStore from "../../../../ions/useStore";
import { PlayerVote } from "../../../../molecules/player-vote";
import { QuestionCard } from "../../../../molecules/question-card";
import { SmallLogo } from "../../../../molecules/small-logo";

const Page = () => {
	const players = useStore(state => state.players);
	return (
		<div>
			<SmallLogo />
			<QuestionCard />
			<PlayerVote players={players} />
		</div>
	);
};

export default Page;
