import React from "react";
import { SmallLogo } from "../../../../molecules/small-logo";
import { QuestionCard } from "../../../../molecules/question-card";
import { PlayerVote } from "../../../../molecules/player-vote";

const Page = () => {
	return (
		<div>
			<SmallLogo />
			<QuestionCard />
			<PlayerVote />
		</div>
	);
};

export default Page;
