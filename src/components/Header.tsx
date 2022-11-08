import { FC } from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import { SearchProps } from "../interfaces/SearchProps";
import DesktopHeadBar from "./DesktopHeadBar";
import MobileHeadBar from "./MobileHeadBar";

const StyledHeader = styled.header`
  height: 56px;
  display: flex;
  box-sizing: border-box;
  @media (max-width: 768px) {
    background: red;
  }
  @media (min-width: 768px) {
    padding: 10px 0;
    box-shadow: 0 1px 4px #eee;
  }
`;

interface HeaderProps extends SearchProps {}

const Header: FC<HeaderProps> = ({
  onChangeSearchText,
  searchText,
  onSubmit,
}) => {
  const isMobile = useIsMobile();

  const renderHeader = (): JSX.Element => {
    // Can be replaced by CSS media queries.

    return isMobile ? (
      <MobileHeadBar
        onSubmit={onSubmit}
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
    ) : (
      <DesktopHeadBar
        onSubmit={onSubmit}
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
    );
  };

  return <StyledHeader>{renderHeader()}</StyledHeader>;
};

export default Header;
