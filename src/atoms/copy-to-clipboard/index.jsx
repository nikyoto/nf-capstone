import React from "react";
import { StyledCopyButton } from "./styled";
import Icon from "../icon";

export const CopyToClipboard = ({ copied, ...props }) => {
	return (
		<StyledCopyButton type="submit" {...props}>
			<Icon height={20} width={20} icon={copied ? "check" : "copy"} />
		</StyledCopyButton>
	);
};
