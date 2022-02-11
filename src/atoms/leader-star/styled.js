import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledLeaderStar = styled.button`
	padding: 0.75rem;
	border-style: none;
	border-radius: 0 ${pxToRem(9)} ${pxToRem(9)} 0;
	background: #ffd028;
	color: #212121;
`;
