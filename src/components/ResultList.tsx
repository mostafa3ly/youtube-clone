import { FC } from "react";
import { Video } from "../interfaces/Video";
import VideoItem from "./VideoItem";

interface ResultListProps {
  results: Video[];
}

const ResultList: FC<ResultListProps> = ({ results }) => {
  const renderResults = (): JSX.Element[] =>
    results.map((item) => <VideoItem key={item.id.videoId} video={item} />);

  return <div>{renderResults()}</div>;
};

export default ResultList;
