import { BaseItem } from "./BaseItem";
import { PlaylistId } from "./PlaylistId";
import { PlaylistListItem } from "./PlaylistListItem";

export interface PLaylist extends BaseItem, PlaylistListItem {
    id: PlaylistId;
}