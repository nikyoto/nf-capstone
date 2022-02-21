import React from "react";
import Icon from "../icon";
import { StyledPlayerDelete } from "../player-delete/styled";
import { StyledDeleteContainer, StyledPlayer, StyledPlayerName } from "./styled";

export const Player = ({ children }) => {
	return (
		<StyledPlayer>
			<StyledPlayerName>{children}</StyledPlayerName>
			<StyledDeleteContainer>
				<StyledPlayerDelete>
					<Icon height={24} width={24} icon="delete" />
				</StyledPlayerDelete>
			</StyledDeleteContainer>
		</StyledPlayer>
	);
};
