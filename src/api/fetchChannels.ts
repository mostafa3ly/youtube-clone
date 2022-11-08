import { api } from ".";
import { ChannelListResponse } from "../interfaces/ChannelListResponse";

export const fetchChannels = async (id: string): Promise<ChannelListResponse> => {
    const { data } = await api.get<ChannelListResponse>("/channels", {
        params: { id, part: "statistics" },
    });
    return data;
}