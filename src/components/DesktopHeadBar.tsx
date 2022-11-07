import { FC, Fragment } from "react";
import { SearchProps } from "../interfaces/SearchProps";
import DesktopLogo from "./DesktopLogo";
import DesktopSearchBox from "./DesktopSearchBox";

interface DesktopHeadBarProps extends SearchProps {}

const DesktopHeadBar: FC<DesktopHeadBarProps> = ({
  onChangeSearchText,
  searchText,
  onSubmit,
}) => {
  return (
    <Fragment>
      <DesktopLogo />
      <DesktopSearchBox
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
        onSubmit={onSubmit}
      />
    </Fragment>
  );
};

export default DesktopHeadBar;
