import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 700px;
    min-width: 700px;
    margin: 0 auto;
  }
`;

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
