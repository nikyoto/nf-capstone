import React from "react";
import Icon from "../icon";
import { StyledLeaderStar } from "../leader-star/styled";
import { StyledLeader, StyledLeaderName, StyledStarContainer } from "./styled";

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
