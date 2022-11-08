import { ItemKind } from "../enums/ItemKind";

export interface ChannelId {
    channelId: string;
    kind: ItemKind.channel;
}