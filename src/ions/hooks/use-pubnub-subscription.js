import { usePubNub } from "pubnub-react";
import { useCallback, useEffect } from "react";

export const usePubnubSubscription = (channels, handleMessage) => {
	const [channel] = channels;
	const pubnub = usePubNub();
	useEffect(() => {
		const listeners = { message: handleMessage };
		pubnub.addListener(listeners);
		pubnub.subscribe({ channels, withPresence: true });

		return () => {
			pubnub.unsubscribe({ channels });
			pubnub.removeListener(listeners);
		};
	}, [pubnub, channels, handleMessage]);

	const sendMessage = useCallback(
		message => {
			if (message) {
				return pubnub.publish({ channel, message });
			}
			return Promise.reject(new Error("Please provide a valid message."));
		},
		[pubnub, channel]
	);

	return { pubnub, sendMessage };
};
