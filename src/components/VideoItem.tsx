import { FC } from "react";
import styled from "styled-components";
import { Video } from "../interfaces/Video";
import { addCommasToNumbers } from "../utils/addCommasToNumbers";
import ListItem from "./ListItem";
import SecondaryText from "./SecondaryText";
import Title from "./Title";
import VideoDuration from "./VideoDuration";

const StyledDetails = styled.div`
  margin: 0 8px;
`;

const ThumbnailContainer = styled.div`
  min-width: 160px;
  max-width: 160px;
  position: relative;
`;

const StyledThumbnail = styled.img`
  object-fit: cover;
  background: black;
  width: 100%;
  height: 100%;
`;

interface VideoItemProps {
  video: Video;
}

const VideoItem: FC<VideoItemProps> = ({
  video: {
    snippet,
    statistics: { viewCount },
    contentDetails: { duration },
  },
}) => {
  const thumbnail = snippet.thumbnails.default;

  return (
    <ListItem>
      <ThumbnailContainer>
        <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
        <VideoDuration duration={duration} />
      </ThumbnailContainer>
      <StyledDetails>
        <Title>{snippet.title}</Title>
        <SecondaryText>{snippet.channelTitle}</SecondaryText>
        <SecondaryText>{addCommasToNumbers(+viewCount)} views</SecondaryText>
      </StyledDetails>
    </ListItem>
  );
};

export default VideoItem;
