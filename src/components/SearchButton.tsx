import { FC } from "react";
import styled from "styled-components";
import search from "../assets/search.svg";

const StyledSearchButton = styled.button`
  border: none;
  background: transparent;
`;

interface SearchButtonProps {
  onClickSearch: () => void;
}

const SearchButton: FC<SearchButtonProps> = ({ onClickSearch }) => {
  return (
    <StyledSearchButton onClick={onClickSearch}>
      <img alt="Search" src={search} />
    </StyledSearchButton>
  );
};

export default SearchButton;
