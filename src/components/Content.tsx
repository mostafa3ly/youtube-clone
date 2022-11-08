import { FC } from "react";
import styled from "styled-components";
import { BaseItem } from "../interfaces/BaseItem";
import LoadingView from "./LoadingView";
import ResultList from "./ResultList";

const StyledContent = styled.main`
  background: #f5f5f5;
  padding: 16px 0;
  @media (max-width: 768px) {
    padding: 16px 8px;
    background: white;
  }
`;

interface ContentProps {
  isLoading: boolean;
  results: BaseItem[];
}

const Content: FC<ContentProps> = ({ isLoading, results }) => {
  const renderContent = (): JSX.Element => {
    return isLoading ? <LoadingView /> : <ResultList results={results} />;
  };

  return <StyledContent>{renderContent()}</StyledContent>;
};

export default Content;
