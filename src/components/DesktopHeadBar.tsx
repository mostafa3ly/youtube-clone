import { FC, Fragment } from "react";
import { SearchProps } from "../interfaces/SearchProps";
import DesktopLogo from "./DesktopLogo";
import DesktopSearchBox from "./DesktopSearchBox";


interface DesktopHeadBarProps extends SearchProps {}

const DesktopHeadBar: FC<DesktopHeadBarProps> = ({
  onChangeSearchText,
  searchText,
}) => {
  return (
    <Fragment>
      <DesktopLogo />
      <DesktopSearchBox
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
    </Fragment>
  );
};

export default DesktopHeadBar;
