import axios from "axios";
import useStore from "../useStore";
import randomNumber from "../utils/randomNumber";

export const randomQuestion = async () => {
	const setCurrentQuestion = useStore.getState().setCurrentQuestion;
	const { data } = await axios.get(`/questions/questions.json`);
	const questionData = data.questions.map(item => ({ ...item }));
	const randomQuestion = questionData[randomNumber(questionData.length - 1)];
	setCurrentQuestion(randomQuestion);
};
