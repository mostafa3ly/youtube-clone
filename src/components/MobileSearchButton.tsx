import { FC } from "react";
import styled from "styled-components";
import search from "../assets/search-mobile.svg";

const StyledSearchButton = styled.button`
  border: none;
  background: transparent;
`;

interface MobileSearchButtonProps {
  onClickSearch: () => void;
}

const MobileSearchButton: FC<MobileSearchButtonProps> = ({ onClickSearch }) => {
  return (
    <StyledSearchButton onClick={onClickSearch}>
      <img alt="Search" src={search} />
    </StyledSearchButton>
  );
};

export default MobileSearchButton;
