import React from "react";
import { StyledStarContainer, StyledLeader, StyledLeaderName } from "./styled";
import { StyledLeaderStar } from "../leader-star/styled";
import Icon from "../icon";

export const Leader = ({ children }) => {
	return (
		<StyledLeader>
			<StyledLeaderName>{children}</StyledLeaderName>
			<StyledStarContainer>
				<StyledLeaderStar>
					<Icon height={24} width={24} icon="star" />
				</StyledLeaderStar>
			</StyledStarContainer>
		</StyledLeader>
	);
};
