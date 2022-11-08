import { FC, Fragment, useState } from "react";
import { SearchProps } from "../interfaces/SearchProps";
import MobileSearchButton from "./MobileSearchButton";
import logo from "../assets/logo-mobile.svg";
import MobileSearchBox from "./MobileSearchBox";

interface MobileHeadBarProps extends SearchProps {}

const MobileHeadBar: FC<MobileHeadBarProps> = ({
  onChangeSearchText,
  searchText,
  onSubmit,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClickSearch = (): void => {
    setIsEditing(true);
  };

  return (
    <Fragment>
      <img alt="Youtube" src={logo} />
      <MobileSearchBox
        isEditing={isEditing}
        onChangeSearchText={onChangeSearchText}
        searchText={searchText}
        onSubmit={onSubmit}
      />
      <MobileSearchButton onClickSearch={handleClickSearch} />
    </Fragment>
  );
};

export default MobileHeadBar;
