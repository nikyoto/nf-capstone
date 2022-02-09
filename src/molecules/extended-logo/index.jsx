import React from "react";
import { StyledHeadline } from "../../atoms/logo-headline/styled";
import { StyledMarks } from "../../atoms/logo-marks/styled";
import { StyledLogoDiv } from "./styled";
import { Logo } from "../../atoms/logo";

export const ExtendedLogo = ({ ...props }) => {
	return (
		<StyledLogoDiv>
			<Logo {...props} />
			<StyledHeadline>
				Hoo<StyledMarks>!?</StyledMarks>
			</StyledHeadline>
		</StyledLogoDiv>
	);
};
