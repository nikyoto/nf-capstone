import { Global } from "@emotion/react";
import { PubNubProvider } from "pubnub-react";
import React from "react";
import { pubnub } from "../ions/pubnub";
import { globalStyle } from "../ions/styles";

const App = ({ Component, pageProps }) => {
	return (
		<PubNubProvider client={pubnub}>
			<Global styles={globalStyle} />
			<Component {...pageProps} />
		</PubNubProvider>
	);
};

export default App;
