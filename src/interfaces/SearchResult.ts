import { Item } from "./Item";

export interface SearchResult {
    items: Item[];
    pageInfo: { totalResults: number }
}