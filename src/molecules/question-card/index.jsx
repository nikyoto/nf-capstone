import axios from "axios";
import React, { useEffect } from "react";
import { Question } from "../../atoms/question";
import { QuestionHeadline } from "../../atoms/question-headline";
import useStore from "../../ions/useStore";
import randomNumber from "../../ions/utils/randomNumber";
import { StyledQuestionCard, StyledQuestionCardContainer } from "./styled";

export const QuestionCard = () => {
	const currentQuestion = useStore(state => state.currentQuestion);

	useEffect(() => {
		const callback = async () => {
			const setCurrentQuestion = useStore.getState().setCurrentQuestion;
			const { data } = await axios.get(`/questions/questions.json`);
			const questionData = data.questions.map(item => ({ ...item }));
			const randomQuestion = questionData[randomNumber(questionData.length - 1)];
			setCurrentQuestion(randomQuestion);
		};
		void callback();
	}, []);

	return (
		<StyledQuestionCardContainer>
			<StyledQuestionCard>
				<QuestionHeadline />
				<Question>{currentQuestion.question}</Question>
			</StyledQuestionCard>
		</StyledQuestionCardContainer>
	);
};
