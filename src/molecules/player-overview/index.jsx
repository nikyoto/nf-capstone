import { Player } from "../../atoms/player";
import React from "react";
import { StyledPlayerOverview } from "./styled";
import { Leader } from "../../atoms/leader";

const players = ["Michelangelo", "Gregor", "Petra", "Gustav", "Dominik", "Tom", "Sarah"];

export const PlayerOverview = ({ children }) => {
	return (
		<StyledPlayerOverview>
			<Leader>{children}</Leader>
			{players.map(player => {
				return <Player>{player}</Player>;
			})}
		</StyledPlayerOverview>
	);
};
