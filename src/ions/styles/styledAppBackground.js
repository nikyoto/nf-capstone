import styled from "@emotion/styled";

export const StyledAppBackground = styled.div`
	--shade: #171717fa;

	display: flex;
	position: absolute;
	inset: 0;
	flex-direction: column;
	align-content: center;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(var(--shade), var(--shade)), url("/logo.png");
	background-repeat: no-repeat;
	background-position: center;
`;
