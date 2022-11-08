import { FC } from "react";
import styled from "styled-components";
import { Video } from "../interfaces/Video";
import LoadingView from "./LoadingView";
import ResultList from "./ResultList";

const StyledContent = styled.main``;

interface ContentProps {
  isLoading: boolean;
  results: Video[];
}

const Content: FC<ContentProps> = ({ isLoading, results }) => {
  const renderContent = (): JSX.Element => {
    return isLoading ? <LoadingView /> : <ResultList results={results} />;
  };

  return <StyledContent>{renderContent()}</StyledContent>;
};

export default Content;
