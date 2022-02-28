import React, { useEffect } from "react";
import { Question } from "../../atoms/question";
import { QuestionHeadline } from "../../atoms/question-headline";
import { randomQuestion } from "../../ions/randomQuestion/randomQuestion";
import useStore from "../../ions/useStore";
import { StyledCountdown, StyledQuestionCard, StyledQuestionCardContainer } from "./styled";

export const QuestionCard = () => {
	const currentQuestion = useStore(state => state.currentQuestion);
	const countdown = useStore(state => state.countdown);
	const setCountdown = useStore(state => state.setCountdown);
	const round = useStore(state => state.round);
	const setRound = useStore(state => state.setRound);
	const setVoted = useStore(state => state.setVoted);

	const tick = () => {
		if (countdown === 0) {
			reset();
			setRound(round + 1);
		} else setCountdown(countdown - 1);
	};

	const reset = () => {
		void randomQuestion();
		setCountdown(30);
		setVoted(false);
	};

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);
		return () => clearInterval(timerID);
	});

	return (
		<StyledQuestionCardContainer>
			<StyledQuestionCard>
				<QuestionHeadline />
				<Question>{currentQuestion.question}</Question>
				<StyledCountdown>{countdown}</StyledCountdown>
			</StyledQuestionCard>
		</StyledQuestionCardContainer>
	);
};
