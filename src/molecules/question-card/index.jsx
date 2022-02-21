import React from "react";
import { StyledQuestionCard, StyledQuestionCardContainer } from "./styled";
import { QuestionHeadline } from "../../atoms/question-headline";
import { Question } from "../../atoms/question";

export const QuestionCard = () => {
	return (
		<StyledQuestionCardContainer>
			<StyledQuestionCard>
				<QuestionHeadline />
				<Question>Wer würde am ehesten sein Bier auf Ex trinken!?</Question>
			</StyledQuestionCard>
		</StyledQuestionCardContainer>
	);
};
