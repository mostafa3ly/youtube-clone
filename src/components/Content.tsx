import { FC, Fragment } from "react";
import styled from "styled-components";
import LoadingView from "./LoadingView";

const StyledContent = styled.main`

`;

interface ContentProps {
  isLoading: boolean;
}

const Content: FC<ContentProps> = ({ isLoading }) => {
  const renderContent = (): JSX.Element => {
    return isLoading ? <LoadingView /> : <Fragment />;
  };

  return <StyledContent>{renderContent()}</StyledContent>;
};

export default Content;
