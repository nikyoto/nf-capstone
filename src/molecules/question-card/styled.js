import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledQuestionCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 400px;
	height: 200px;
	margin: 1rem;
	border-radius: ${pxToRem(16)};
	background-color: #ffd028;
	font-weight: 900;
	filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
	text-align: center;
`;

export const StyledQuestionCardContainer = styled.div`
	display: flex;
	justify-content: center;
`;
