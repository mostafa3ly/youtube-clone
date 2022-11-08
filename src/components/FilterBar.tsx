import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { DurationFilter } from "../enums/DurationFilter";
import { TypeFilter } from "../enums/TypeFilter";
import useIsMobile from "../hooks/useIsMobile";
import Container from "./Container";
import DesktopFilterBar from "./DesktopFilterBar";
import MobileFilterBar from "./MobileFilterBar";

const StyledFilterBar = styled.div`
  display: flex;
  padding: 4px;
  border-bottom: 1px solid #ddd;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    padding-top: 16px;
    background: #f5f5f5;
    border-color: #e5e5e5;
  }
`;

interface FilterBarProps {
  total: number;
  type: TypeFilter;
  duration: DurationFilter;
  onChangeDuration: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeType: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterBar: FC<FilterBarProps> = ({
  total,
  onChangeType,
  type,
  duration,
  onChangeDuration,
}) => {
  const isMobile = useIsMobile();

  const renderFilterBar = (): JSX.Element => {
    // Can be replaced by CSS media queries.

    return isMobile ? (
      <MobileFilterBar
        onChangeType={onChangeType}
        type={type}
        onChangeDuration={onChangeDuration}
        duration={duration}
      />
    ) : (
      <Container>
        <DesktopFilterBar total={total} />
      </Container>
    );
  };

  return <StyledFilterBar>{renderFilterBar()}</StyledFilterBar>;
};

export default FilterBar;
