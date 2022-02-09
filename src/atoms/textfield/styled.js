import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledTextField = styled.input`
	padding: 0 1rem;
	border: 0;
	border-radius: ${pxToRem(9)} 0 0 ${pxToRem(9)};
	background: #fff;
	font-family: Roboto, serif;
	font-size: 1em;
	font-weight: 400;
`;
