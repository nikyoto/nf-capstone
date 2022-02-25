import React, { useEffect, useMemo, useState } from "react";
import useStore from "../../ions/useStore";
import { StyledPlayerButton, StyledPlayerButtonName } from "./styled";

export const PlayerButton = ({ children, ...props }) => {
	const players = useStore(state => state.players);
	const step = useMemo(() => 1 / players.length, [players]);
	const [value, setValue] = useState(0);
	const voted = useStore(state => state.voted);
	const setVoted = useStore(state => state.setVoted);

	useEffect(() => {
		const { setVoted } = useStore.getState();
		setVoted(false);
	}, []);

	return (
		<StyledPlayerButton
			{...props}
			disabled={voted}
			style={{
				"--value": value,
			}}
			onClick={() => {
				setVoted(true);
				setValue(previousValue => previousValue + step);
			}}
		>
			<StyledPlayerButtonName>{children}</StyledPlayerButtonName>
		</StyledPlayerButton>
	);
};
