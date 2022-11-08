import { ChannelId } from "./ChannelId";
import { ChannelListItem } from "./ChannelListItem";
import { BaseItem } from "./BaseItem";

export interface Channel extends BaseItem, ChannelListItem{
    id: ChannelId;
}