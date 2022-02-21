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
				const isLeader = player.isLeader ?? false;
				const name = player.name ?? "Guest";
				switch (isLeader) {
					case true:
						return <Leader key={player.id}>{name}</Leader>;
					default:
						return <Player key={player.id}>{name}</Player>;
				}
			})}
		</StyledPlayerOverview>
	);
};
