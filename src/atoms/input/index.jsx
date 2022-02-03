import React from "react";
import StyledInput from "./styled";

const Input = ({ children, ...props }) => {
	return <StyledInput {...props}>{children}</StyledInput>;
};

export default Input;
