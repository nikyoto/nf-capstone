import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledPlayerDelete = styled.button`
	padding: 0.75rem;
	border-style: none;
	border-radius: 0 ${pxToRem(9)} ${pxToRem(9)} 0;
	background: #ff6161;
	color: #fff;

	&:active {
		background: #bd4646ff;
	}
`;
