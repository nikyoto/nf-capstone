import React, { useState } from "react";
import { TextField } from "../../atoms/textfield";
import { CopyToClipboard } from "../../atoms/copy-to-clipboard";
import { StyledCopyLink } from "./styled";
import { useCopyToClipboard } from "../../ions/hooks/copy-to-clipboard";

export const CopyLink = ({ value, ...props }) => {
	const { copy } = useCopyToClipboard();
	const [copied, setCopied] = useState(false);

	return (
		<StyledCopyLink>
			<TextField value={value} {...props} />
			<CopyToClipboard
				copied={copied}
				onClick={() => {
					copy(value);
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 1_000);
				}}
			/>
		</StyledCopyLink>
	);
};
