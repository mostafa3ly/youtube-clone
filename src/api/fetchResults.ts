import { api } from ".";
import { ItemKind } from "../enums/ItemKind";
import { SearchResult } from "../interfaces/SearchResult";
import { fetchChannels } from "./fetchChannels";
import { fetchPlaylists } from "./fetchPlaylists";
import { fetchVideos } from "./fetchVideos";

export const fetchResults = async (q: string): Promise<SearchResult> => {
    const { data } = await api.get<SearchResult>("/search", {
        params: { q, maxResults: 100, part: "snippet", type: "playlist" },
    });
    const items = await Promise.all(data.items.map(async (item) => {
        switch (item.id.kind) {
            case ItemKind.video:
                const { items: [video] } = await fetchVideos(item.id.videoId);
                return { ...item, ...video, id: item.id };
            case ItemKind.channel:
                const { items: [channel] } = await fetchChannels(item.id.channelId);
                return { ...item, ...channel, id: item.id };
            case ItemKind.playlist:
                const { items: [playlist] } = await fetchPlaylists(item.id.playlistId);
                return { ...item, ...playlist, id: item.id };

            default:
                return item;
        }
    }));
    
    return { ...data, items };
}