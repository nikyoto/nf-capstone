import React from "react";
import { Question } from "../../atoms/question";
import { QuestionHeadline } from "../../atoms/question-headline";
import { StyledQuestionCard, StyledQuestionCardContainer } from "./styled";

export const QuestionCard = () => {
	return (
		<StyledQuestionCardContainer>
			<StyledQuestionCard>
				<QuestionHeadline />
				<Question>Test</Question>
			</StyledQuestionCard>
		</StyledQuestionCardContainer>
	);
};
