import { FC, Fragment } from "react";
import styled from "styled-components";
import filter from "../assets/filter.svg";
import { addCommasToNumbers } from "../utils/addCommasToNumbers";

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
    <Fragment>
      <ResultText>About {addCommasToNumbers(total)} results</ResultText>
      <FilterButton>
        <img src={filter} alt="Filter" />
        filter
      </FilterButton>
    </Fragment>
  );
};

export default DesktopFilterBar;
