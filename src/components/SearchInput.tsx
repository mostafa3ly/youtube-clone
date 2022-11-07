import { FC } from "react";
import styled from "styled-components";
import { SearchProps } from "../interfaces/SearchProps";

const StyledSearchInput = styled.input`
  border: 0;
  padding: 0 8px;
  outline: none;
  font-size: 1em;
  border-radius: 1px;
  width: 100%;
  height: 100%;
`;

interface SearchInputProps extends SearchProps {}

const SearchInput: FC<SearchInputProps> = ({
  onChangeSearchText,
  searchText,
}) => {
  return (
    <StyledSearchInput
      type="search"
      autoFocus
      onChange={onChangeSearchText}
      value={searchText}
    />
  );
};

export default SearchInput;
