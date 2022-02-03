import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

const StyledInput = styled.input`
	padding: 0.5em 2em;
	border-style: none;
	border-radius: ${pxToRem(9)};
	background: #fff;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	font-family: Roboto, serif;
	font-size: 1em;
	font-weight: 400;

	::placeholder {
		opacity: 0.5;
		font-weight: 200;
	}
`;

export default StyledInput;
