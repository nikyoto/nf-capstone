import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledPlayerButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: ${pxToRem(9)};
	background: #212121;
	color: white;
	font-size: 16px;
	font-weight: 800;
	filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));

	&:active {
		background: #1c1c1c;
	}
`;

export const StyledPlayerButtonName = styled.div`
	flex-grow: 1;
	padding: 1.25rem;
	word-break: break-all;
`;
