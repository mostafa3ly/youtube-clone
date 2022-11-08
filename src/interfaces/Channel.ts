import { ChannelId } from "./ChannelId";
import { Item } from "./Item";

export interface Channel extends Item {
    id: ChannelId;
}