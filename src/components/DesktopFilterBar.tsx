import { FC } from "react";
import styled from "styled-components";
import filter from "../assets/filter.svg";
import { addCommasToNumbers } from "../utils/addCommasToNumbers";

const StyledDesktopFilterBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ResultText = styled.p`
  font-size: small;
`;

const FilterButton = styled.button`
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  font-size: small;
  color: #777;
  background: transparent;
  display: flex;
  align-items: center;
`;

interface DesktopFilterBarProps {
  total: number;
}

const DesktopFilterBar: FC<DesktopFilterBarProps> = ({ total }) => {
  return (
      <StyledDesktopFilterBar>
        <ResultText>About {addCommasToNumbers(total)} results</ResultText>
        <FilterButton>
          <img src={filter} alt="Filter" />
          filter
        </FilterButton>
      </StyledDesktopFilterBar>  );
};

export default DesktopFilterBar;
