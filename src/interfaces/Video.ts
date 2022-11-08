import { BaseItem } from "./BaseItem";
import { VideoId } from "./VideoId";
import { VideoListItem } from "./VideoListItem";

export interface Video extends BaseItem, VideoListItem{
    id: VideoId;
}