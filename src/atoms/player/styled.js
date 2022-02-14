import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledPlayer = styled.div`
	display: flex;
	align-items: center;
	border-radius: ${pxToRem(9)};
	background: #212121;
	color: white;
	font-weight: 800;
`;

export const StyledDeleteContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const StyledPlayerName = styled.div`
	flex-grow: 1;
	padding: 0.5rem 1rem;
	word-break: break-all;
`;
