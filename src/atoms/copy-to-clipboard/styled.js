import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledCopyButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.7em;
	border-style: none;
	border-radius: 0 ${pxToRem(9)} ${pxToRem(9)} 0;
	background: #ffd028;
	color: #212121;
`;
