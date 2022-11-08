import { FC } from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import { SearchProps } from "../interfaces/SearchProps";
import Container from "./Container";
import DesktopHeadBar from "./DesktopHeadBar";
import MobileHeadBar from "./MobileHeadBar";

const StyledHeader = styled.header`
  height: 56px;
  display: flex;
  @media (max-width: 768px) {
    background: red;
  }
  @media (min-width: 768px) {
    box-shadow: 0 1px 2px #ddd;
    position: sticky;
    top: 0;
    background: white;
    z-index: 999999;
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
      <Container>
        <DesktopHeadBar
          onSubmit={onSubmit}
          searchText={searchText}
          onChangeSearchText={onChangeSearchText}
        />
      </Container>
    );
  };

  return <StyledHeader>{renderHeader()}</StyledHeader>;
};

export default Header;
