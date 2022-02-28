import React from "react";
import { StyledRoundNumber } from "../../atoms/round-number/styled";
import useStore from "../../ions/useStore";

export const RoundNumber = () => {
	const round = useStore(state => state.round);
	return <StyledRoundNumber>Round: {round}</StyledRoundNumber>;
};
