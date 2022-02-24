import React from "react";
import { Question } from "../../atoms/question";
import { QuestionHeadline } from "../../atoms/question-headline";
import useStore from "../../ions/useStore";
import { StyledQuestionCard, StyledQuestionCardContainer } from "./styled";

export const QuestionCard = () => {
	const currentQuestion = useStore(state => state.currentQuestion);
	return (
		<StyledQuestionCardContainer>
			<StyledQuestionCard>
				<QuestionHeadline />
				<Question>{currentQuestion.question}</Question>
			</StyledQuestionCard>
		</StyledQuestionCardContainer>
	);
};
