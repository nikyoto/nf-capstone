import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledPlayerButton = styled.button`
	display: flex;
	position: relative;
	z-index: 0;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border: none;
	border-radius: ${pxToRem(9)};
	background: #212121;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	color: white;
	font-size: 16px;
	font-weight: 800;

	&:active {
		background: #1c1c1c;
	}

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		z-index: -1;
		transform: scaleY(var(--value));
		transform-origin: 0 100%;
		transition: transform 0.3s ease-in-out;
		background: #ffd028;
	}
`;

export const StyledPlayerButtonName = styled.div`
	flex-grow: 1;
	padding: 1.25rem;
	text-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
	word-break: break-all;
`;
