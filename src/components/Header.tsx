import { FC, useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

const StyledHeader = styled.header`
  height: 56px;
  display: flex;
  @media (max-width: 768px) {
    background: red;
  }
`;

const Header: FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClickSearch = (): void => {
    setIsEditing(true);
  };

  return (
    <StyledHeader>
      <Logo />
      <SearchBox isEditing={isEditing} />
      <SearchButton onClickSearch={handleClickSearch} />
    </StyledHeader>
  );
};

export default Header;
