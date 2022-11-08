import { ChangeEvent, FC, Fragment } from "react";
import { DurationFilter } from "../enums/DurationFilter";
import { TypeFilter } from "../enums/TypeFilter";
import FilterSelector from "./FilterSelector";

interface MobileFilterBarProps {
  type: TypeFilter;
  duration: DurationFilter;
  onChangeDuration: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeType: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const MobileFilterBar: FC<MobileFilterBarProps> = ({
  type,
  duration,
  onChangeDuration,
  onChangeType,
}) => {
  return (
    <Fragment>
      <FilterSelector
        options={TypeFilter}
        value={type}
        onChange={onChangeType}
      />
      <FilterSelector
        options={DurationFilter}
        onChange={onChangeDuration}
        value={duration}
      />
    </Fragment>
  );
};

export default MobileFilterBar;
