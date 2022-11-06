import { FC } from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  margin: 10px 0;
  border: 0;
  padding: 0 8px;
  outline: none;
  font-size: 20px;
  border-radius: 1px;
  flex-grow: 1;
`;

const SearchInput: FC = () => {
  return <StyledSearchInput type="search" />;
};

export default SearchInput;
