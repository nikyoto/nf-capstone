import React from "react";
import { StyledPlayerButton, StyledPlayerButtonName } from "./styled";

export const PlayerButton = ({ children }) => {
	return (
		<StyledPlayerButton>
			<StyledPlayerButtonName>{children}</StyledPlayerButtonName>
		</StyledPlayerButton>
	);
};
