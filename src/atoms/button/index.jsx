import React from "react";
import StyledButton from "./styled";

const Button = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
