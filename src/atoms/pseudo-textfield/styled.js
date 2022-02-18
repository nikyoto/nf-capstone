import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledPseudoTextField = styled.div`
	display: inline-block;
	max-width: 265px;
	padding: 0.7rem 1rem;
	overflow: hidden;
	border: 0;
	border-radius: ${pxToRem(9)} 0 0 ${pxToRem(9)};
	background: #fff;
	color: black;
	font-family: Roboto, serif;
	font-size: 1em;
	font-weight: 400;
	line-height: 20px;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
