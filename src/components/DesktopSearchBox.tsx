import { FC } from "react";
import styled from "styled-components";
import { SearchProps } from "../interfaces/SearchProps";
import search from "../assets/search.svg";

const SearchBox = styled.div`
  flex-grow: 3;
  display: flex;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  font-size: 1em;
  padding: 0 8px;
  border: 1px solid #ccc;
  border-radius: 3px 0 0 3px;
`;

const Button = styled.button`
  width: 75px;
  border: 1px solid #ccc;
  border-radius: 0 3px 3px 0;
`;

interface DesktopSearchBoxProps extends SearchProps {}

const DesktopSearchBox: FC<DesktopSearchBoxProps> = ({
  onChangeSearchText,
  searchText,
  onSubmit,
}) => {
  return (
    <SearchBox>
      <SearchInput
        type="search"
        value={searchText}
        onChange={onChangeSearchText}
      />
      <Button onClick={onSubmit}>
        <img alt="Search" src={search} />
      </Button>
    </SearchBox>
  );
};

export default DesktopSearchBox;
