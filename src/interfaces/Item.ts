import { ChannelId } from "./ChannelId";
import { PlaylistId } from "./PlaylistId";
import { VideoId } from "./VideoId";
import { ThumbnailsResult } from "./ThumbnailsResult";

export interface Item {
    id: VideoId | PlaylistId | ChannelId;
    snippet: {
        title: string;
        publishedAt: string;
        channelId: string;
        description: string;
        channelTitle: string;
        thumbnails: ThumbnailsResult;
    }
}