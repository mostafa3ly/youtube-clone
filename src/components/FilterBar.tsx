import { FC } from "react";
import styled from "styled-components";
import useIsMobileView from "../hooks/useIsMobileView";
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

const FilterBar: FC = () => {
  const isMobileView = useIsMobileView();

  const renderFilterBar = (): JSX.Element => {
    // Can be replaced by CSS media queries.

    return isMobileView ? <MobileFilterBar /> : <DesktopFilterBar />;
  };

  return <StyledFilterBar>{renderFilterBar()}</StyledFilterBar>;
};

export default FilterBar;
