import React from "react";
import logo from "../../../public/logo.png";
import { StyledLogo } from "./styled";

export const Logo = ({ ...props }) => {
	return (
		<StyledLogo
			src={logo}
			alt="This image shows an owl which is the logo for Hoo!"
			{...props}
		/>
	);
};
