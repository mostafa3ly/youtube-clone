import { FC } from "react";
import styled from "styled-components";
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

interface SearchBoxProps {
  isEditing: boolean;
}

const SearchBox: FC<SearchBoxProps> = ({ isEditing }) => {
  const renderSearch = (): JSX.Element => {
    if (isEditing) return <SearchInput />;
    return <StyledSearchText></StyledSearchText>;
  };
  return <StyledSearchBox>{renderSearch()}</StyledSearchBox>;
};

export default SearchBox;
