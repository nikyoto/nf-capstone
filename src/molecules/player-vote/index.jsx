import { PlayerButton } from "../../atoms/player-button";
import React from "react";
import { StyledPlayerVote } from "./styled";

const players = ["Michelangelo", "Gregor", "Petra", "Gustav", "Dominik", "Tom", "Sarah"];

export const PlayerVote = ({ children }) => {
	return (
		<StyledPlayerVote>
			<PlayerButton>{children}</PlayerButton>
			{players.map(player => {
				return <PlayerButton>{player}</PlayerButton>;
			})}
		</StyledPlayerVote>
	);
};
