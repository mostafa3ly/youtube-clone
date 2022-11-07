import { ChangeEvent } from "react";

export interface SearchProps {
  onChangeSearchText: (e: ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
}
