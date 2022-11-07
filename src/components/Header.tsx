import { FC, useState } from "react";
import styled from "styled-components";
import { SearchProps } from "../interfaces/SearchProps";
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

interface HeaderProps extends SearchProps {}

const Header: FC<HeaderProps> = ({ onChangeSearchText, searchText }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClickSearch = (): void => {
    setIsEditing(true);
  };

  return (
    <StyledHeader>
      <Logo />
      <SearchBox
        isEditing={isEditing}
        onChangeSearchText={onChangeSearchText}
        searchText={searchText}
      />
      <SearchButton onClickSearch={handleClickSearch} />
    </StyledHeader>
  );
};

export default Header;
