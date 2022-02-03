import React from "react";
import {StyledLogo} from "../../atoms/logo/styled";
import logo from "../../../public/logo.png";
import {StyledHeadline} from "../../atoms/logo-headline/styled";
import {StyledMarks} from "../../atoms/logo-marks/styled";
import {StyledLogoDiv} from "./styled";

const ExtendedLogo = ({src, alt, ...props}) => {
	return (
		<StyledLogoDiv>
			<StyledLogo src={logo} alt="This image shows an owl which is the logo for Hoo!" {...props} />
			<StyledHeadline>Hoo<StyledMarks>!?</StyledMarks></StyledHeadline>
		</StyledLogoDiv>
	)
}

export default ExtendedLogo;
