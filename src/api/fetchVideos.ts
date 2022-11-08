import { api } from ".";
import { VideoListResponse } from "../interfaces/VideoListResponse";

export const fetchVideos = async (id: string): Promise<VideoListResponse> => {
    const { data } = await api.get<VideoListResponse>("/videos", {
        params: { id, part: "statistics,contentDetails" },
    });
    return data;
}