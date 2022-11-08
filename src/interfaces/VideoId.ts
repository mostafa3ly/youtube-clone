import { ItemKind } from "../enums/ItemKind";

export interface VideoId {
    videoId: string;
    kind: ItemKind.video;
}