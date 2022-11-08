import { api } from ".";
import { PlaylistListResponse } from "../interfaces/PlaylistListResponse";

export const fetchPlaylists = async (id: string): Promise<PlaylistListResponse> => {
    const { data } = await api.get<PlaylistListResponse>("/playlists", {
        params: { id, part: "contentDetails" },
    });
    return data;
}