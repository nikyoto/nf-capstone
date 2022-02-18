import React, { useState } from "react";
import { PseudoTextField } from "../../atoms/pseudo-textfield";
import { CopyToClipboard } from "../../atoms/copy-to-clipboard";
import { StyledCopyLink } from "./styled";
import { useCopyToClipboard } from "../../ions/hooks/copy-to-clipboard";

export const CopyLink = ({ value }) => {
	const { copy } = useCopyToClipboard();
	const [copied, setCopied] = useState(false);
	const link = `/lobby/${value}`;

	return (
		<StyledCopyLink>
			<PseudoTextField>{link}</PseudoTextField>
			<CopyToClipboard
				copied={copied}
				onClick={() => {
					copy(`${window.location.origin}${link}`);
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 1_000);
				}}
			/>
		</StyledCopyLink>
	);
};
