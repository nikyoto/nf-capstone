import React from "react";
import { StyledDeleteContainer, StyledPlayer, StyledPlayerName } from "./styled";
import { StyledPlayerDelete } from "../player-delete/styled";
import Icon from "../icon";

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
