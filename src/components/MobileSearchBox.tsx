import { FC } from "react";
import styled from "styled-components";
import { SearchProps } from "../interfaces/SearchProps";

const SearchInput = styled.input`
  border: 0;
  padding: 0 8px;
  outline: none;
  font-size: 1em;
  border-radius: 1px;
  width: 100%;
  height: 100%;
`;

const SearchBox = styled.div`
  flex-grow: 1;
  margin: 10px 4px;
  display: flex;
`;

const SearchText = styled.p`
  color: white;
  margin: auto 0;
`;

interface MobileSearchBoxProps extends SearchProps {
  isEditing: boolean;
}

const MobileSearchBox: FC<MobileSearchBoxProps> = ({
  onChangeSearchText,
  searchText,
  isEditing,
}) => {
  const renderSearch = (): JSX.Element =>
    isEditing ? (
      <SearchInput
        type="search"
        autoFocus
        onChange={onChangeSearchText}
        value={searchText}
      />
    ) : (
      <SearchText>{searchText}</SearchText>
    );

  return <SearchBox>{renderSearch()}</SearchBox>;
};

export default MobileSearchBox;
