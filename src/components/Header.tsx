import { FC } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const StyledHeader = styled.header`
  height: 56px;
  display: flex;
  @media (max-width: 768px) {
    background: red;
  }
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo />
      <SearchInput />
      <SearchButton />
    </StyledHeader>
  );
};

export default Header;
