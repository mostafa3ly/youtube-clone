import { FC } from "react";
import styled from "styled-components";
import LoadingBar from "./LoadingBar";

const StyledLoadingView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
`;

const LoadingText = styled.p`
  color: grey;
  margin-top: 16px;
`;

const LoadingView: FC = () => {
  return (
    <StyledLoadingView>
      <LoadingBar />
      <LoadingText>Loading</LoadingText>
    </StyledLoadingView>
  );
};

export default LoadingView;
