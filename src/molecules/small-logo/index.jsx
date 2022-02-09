import React from "react";
import { Logo } from "../../atoms/logo";
import { StyledLogoBackground } from "./styled";

export const SmallLogo = () => {
	return (
		<StyledLogoBackground>
			<Logo height="54" width="54" />
		</StyledLogoBackground>
	);
};
