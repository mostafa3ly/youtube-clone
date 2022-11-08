import { Item } from "./Item";
import { VideoId } from "./VideoId";

export interface Video extends Item {
    id: VideoId;
    viewCount: string;
    duration: string;
}