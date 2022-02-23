import styled from "@emotion/styled";
import { pxToRem } from "../../ions/utils/unit";

export const StyledPlayerVote = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: ${pxToRem(12)};
	margin: 0;
	padding: 1rem;
`;
