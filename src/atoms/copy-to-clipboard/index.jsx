import React from "react";
import Icon from "../icon";
import { StyledCopyButton } from "./styled";

export const CopyToClipboard = ({ copied, ...props }) => {
	return (
		<StyledCopyButton type="submit" {...props}>
			<Icon height={20} width={20} icon={copied ? "check" : "copy"} />
		</StyledCopyButton>
	);
};
