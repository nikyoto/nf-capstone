import { css } from "@emotion/react";

export const globalStyle = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		background-color: #171717;
		color: white;
		font-family: Roboto, serif;
		font-size: 1rem;
	}
`;
export { StyledAppBackground } from "./styledAppBackground";
export { StyledFieldset } from "./styledFieldset";
