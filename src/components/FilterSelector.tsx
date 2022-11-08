import { ChangeEvent, FC } from "react";
import styled from "styled-components";

const StyledSelector = styled.select`
  padding: 10px 4px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 8px;
  min-width: 100px;
  background: #fcfcfc;
`;

interface FilterSelectorProps {
  options: Record<string | number, string>;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSelector: FC<FilterSelectorProps> = ({
  options,
  value,
  onChange,
}) => {
  const renderOptions = (): JSX.Element[] =>
    Object.values(options).map((option) => (
      <option key={option} value={option}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </option>
    ));

  return (
    <StyledSelector value={value} onChange={onChange}>
      {renderOptions()}
    </StyledSelector>
  );
};

export default FilterSelector;
