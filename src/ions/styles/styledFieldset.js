import styled from "@emotion/styled";
import { pxToRem } from "../utils/unit";

export const StyledFieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(8)};
	max-width: 300px;
	margin: auto;
	padding: 0;
	border: 0;
`;
