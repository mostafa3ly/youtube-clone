import { FC } from "react";
import styled from "styled-components";
import search from "../assets/search.svg";

const StyledSearchButton = styled.button`
  border: none;
  background: transparent;
`;

const SearchButton: FC = () => {
  return (
    <StyledSearchButton>
      <img alt="Search" src={search} />
    </StyledSearchButton>
  );
};

export default SearchButton;
