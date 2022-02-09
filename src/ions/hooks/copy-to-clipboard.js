import copyToClipboard from "copy-to-clipboard";
import { useCallback } from "react";

export const useCopyToClipboard = () => {
	const copy = useCallback(value => {
		copyToClipboard(value);
	}, []);

	return { copy };
};
