import { api } from ".";
import { SearchResult } from "../interfaces/SearchResult";

export const fetchResults = async (q: string): Promise<SearchResult> => {
    const { data } = await api.get<SearchResult>("/search", {
        params: { q, maxResults: 100, part: "snippet" },
    });
    return data;
}