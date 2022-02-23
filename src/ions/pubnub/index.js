import PubNub from "pubnub";
import { v4 as uuid } from "uuid";

export const pubnub = new PubNub({
	publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY,
	subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY,
	uuid: uuid(),
});
