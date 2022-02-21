import React from "react";
import { Leader } from "../../atoms/leader";
import { Player } from "../../atoms/player";
import useStore from "../../ions/useStore";
import { StyledPlayerOverview } from "./styled";

export const PlayerOverview = () => {
	const players = useStore(state => state.players);
	return (
		<StyledPlayerOverview>
			{players.map(player => {
				switch (player.isLeader) {
					case true:
						return <Leader key={player.id}>{player.name}</Leader>;
					default:
						return <Player key={player.id}>{player.name}</Player>;
				}
			})}
		</StyledPlayerOverview>
	);
};
