import { FC } from "react";
import styled from "styled-components";
import { SearchProps } from "../interfaces/SearchProps";
import SearchInput from "./SearchInput";

const StyledSearchBox = styled.div`
  flex-grow: 1;
  margin: 10px 4px;
  display: flex;
`;

const StyledSearchText = styled.p`
  color: white;
  margin: auto 0;
`;

interface SearchBoxProps extends SearchProps {
  isEditing: boolean;
}

const SearchBox: FC<SearchBoxProps> = ({
  isEditing,
  searchText,
  onChangeSearchText,
}) => {
  const renderSearch = (): JSX.Element => {
    if (isEditing)
      return (
        <SearchInput
          onChangeSearchText={onChangeSearchText}
          searchText={searchText}
        />
      );
    return <StyledSearchText>{searchText}</StyledSearchText>;
  };
  return <StyledSearchBox>{renderSearch()}</StyledSearchBox>;
};

export default SearchBox;
