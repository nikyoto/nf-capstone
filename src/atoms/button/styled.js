import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledButton = styled.button`
	padding: 0.8em;
	border-style: none;
	border-radius: ${pxToRem(9)};
	background: #ffd028;
	color: #212121;
	filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
	font-family: Roboto, serif;
	font-size: 1.25em;
	font-weight: 700;
	text-transform: uppercase;

	&:hover {
		background: #c09d1d;
		cursor: pointer;
	}

	&:active {
		background: #c09d1d;
	}
`;

export default StyledButton;
