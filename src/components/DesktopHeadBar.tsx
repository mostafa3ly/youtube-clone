import { FC } from "react";
import styled from "styled-components";
import { SearchProps } from "../interfaces/SearchProps";
import DesktopLogo from "./DesktopLogo";
import DesktopSearchBox from "./DesktopSearchBox";

const StyledDesktopHeadBar = styled.header`
  height: 56px;
  display: flex;
  padding: 10px 0;
  box-sizing: border-box;
`;

interface DesktopHeadBarProps extends SearchProps {}

const DesktopHeadBar: FC<DesktopHeadBarProps> = ({
  onChangeSearchText,
  searchText,
  onSubmit,
}) => {
  return (
      <StyledDesktopHeadBar>
        <DesktopLogo />
        <DesktopSearchBox
          searchText={searchText}
          onChangeSearchText={onChangeSearchText}
          onSubmit={onSubmit}
        />
      </StyledDesktopHeadBar>
  );
};

export default DesktopHeadBar;
