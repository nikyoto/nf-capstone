import { Player } from "../../atoms/player";
import React from "react";
import { StyledPlayerOverview } from "./styled";

const players = ["Michelangelo", "Gregor", "Petra", "Gustav", "Dominik", "Tom", "Sarah"];

export const PlayerOverview = ({ children }) => {
	return (
		<StyledPlayerOverview>
			{players.map(player => {
				return <Player>{player}</Player>;
			})}
		</StyledPlayerOverview>
	);
};
