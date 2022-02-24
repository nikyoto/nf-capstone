import React, { useMemo, useState } from "react";
import useStore from "../../ions/useStore";
import { StyledPlayerButton, StyledPlayerButtonName } from "./styled";

export const PlayerButton = ({ children }) => {
	const players = useStore(state => state.players);
	const step = useMemo(() => 1 / players.length, [players]);
	const [value, setValue] = useState(0);
	const [voted, setVoted] = useState(false);

	return (
		<StyledPlayerButton
			disabled={voted}
			style={{
				"--value": value,
			}}
			onClick={() => {
				setValue(previousValue => previousValue + step);
				setVoted(true);
			}}
		>
			<StyledPlayerButtonName>{children}</StyledPlayerButtonName>
		</StyledPlayerButton>
	);
};
