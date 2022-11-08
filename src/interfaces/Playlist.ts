import { Item } from "./Item";
import { PlaylistId } from "./PlaylistId";

export interface PLaylist extends Item {
    id: PlaylistId;
}