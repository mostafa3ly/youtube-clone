import { FC, Fragment } from "react";
import { DurationFilter } from "../enums/DurationFilter";
import { TypeFilter } from "../enums/TypeFilter";
import FilterSelector from "./FilterSelector";

const MobileFilterBar: FC = () => {
  return (
    <Fragment>
      <FilterSelector options={TypeFilter} />
      <FilterSelector options={DurationFilter} />
    </Fragment>
  );
};

export default MobileFilterBar;
