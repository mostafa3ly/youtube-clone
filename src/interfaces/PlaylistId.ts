import { ItemKind } from "../enums/ItemKind";

export interface PlaylistId {
    playlistId: string;
    kind: ItemKind.playlist;
}