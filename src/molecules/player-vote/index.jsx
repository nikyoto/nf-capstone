import React, { useEffect } from "react";
import { PlayerButton } from "../../atoms/player-button";
import useStore from "../../ions/useStore";
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
