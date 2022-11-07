import { Video } from "./Video";

export interface SearchResult {
    items: Video[];
    pageInfo: { totalResults: number }
}