import { ResultId } from "./ResultId";
import { VideoThumbnailsResult } from "./VideoThumbnailsResult";

export interface Video {
    id: ResultId;
    snippet: {
        title: string;
        image: string;
        publishedAt: string;
        channelId: string;
        description: string;
        thumbnails: VideoThumbnailsResult;
    }
}