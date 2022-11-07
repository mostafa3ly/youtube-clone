import { FC } from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  border: 0;
  padding: 0 8px;
  outline: none;
  font-size: 20px;
  border-radius: 1px;
  width: 100%;
  height: 100%;
`;

const SearchInput: FC = () => {
  return <StyledSearchInput type="search" />;
};

export default SearchInput;
