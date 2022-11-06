import { FC } from "react";
import styled from "styled-components";
import Logo from "./Logo";

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
    </StyledHeader>
  );
};

export default Header;
