import { BaseItem } from "./BaseItem";

export interface SearchResult {
    items: BaseItem[];
    pageInfo: { totalResults: number }
}