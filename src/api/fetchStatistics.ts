import { api } from ".";
import { SearchResult } from "../interfaces/SearchResult";

export const fetchStatistics = async (id: string): Promise<SearchResult> => {
    const { data } = await api.get("/videos", {
        params: { id, part: "statistics"},
    });
    return data;
}