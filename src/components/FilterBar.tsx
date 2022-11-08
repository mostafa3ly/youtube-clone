import { FC } from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/useIsMobile";
import DesktopFilterBar from "./DesktopFilterBar";
import MobileFilterBar from "./MobileFilterBar";

const StyledFilterBar = styled.div`
  display: flex;
  padding: 4px;
  border-bottom: 1px solid #ddd;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    margin-top: 16px;
    justify-content: space-between;
    background: #fcfcfc;
    border-color: #f0f0f0;
  }
`;

interface FilterBarProps {
  total: number;
}

const FilterBar: FC<FilterBarProps> = ({ total }) => {
  const isMobile = useIsMobile();

  const renderFilterBar = (): JSX.Element => {
    // Can be replaced by CSS media queries.

    return isMobile ? <MobileFilterBar /> : <DesktopFilterBar total={total}/>;
  };

  return <StyledFilterBar>{renderFilterBar()}</StyledFilterBar>;
};

export default FilterBar;
