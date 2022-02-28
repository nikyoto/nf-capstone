import React from "react";
import { PlayerButton } from "../../atoms/player-button";
import { StyledPlayerVote } from "./styled";

export const PlayerVote = ({ players }) => {
	return (
		<StyledPlayerVote>
			{players.map(player => {
				return <PlayerButton key={player.id}>{player.name}</PlayerButton>;
			})}
		</StyledPlayerVote>
	);
};
