import { api } from ".";
import { ItemKind } from "../enums/ItemKind";
import { SearchResult } from "../interfaces/SearchResult";
import { Video } from "../interfaces/Video";
import { fetchVideos } from "./fetchVideos";

export const fetchResults = async (q: string): Promise<SearchResult> => {
    const { data } = await api.get<SearchResult>("/search", {
        params: { q, maxResults: 100, part: "snippet" },
    });
    const items = await Promise.all(data.items.map(async (item) => {
        switch (item.id.kind) {
            case ItemKind.video:
                const { items: [video] } = await fetchVideos(item.id.videoId);
                return { ...item as Video, viewCount: video.statistics.viewCount, duration: video.contentDetails.duration } as Video;

            default:
                return item;
        }
    }));
    return { ...data, items };
}