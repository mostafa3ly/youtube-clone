import { FC } from "react";
import styled from "styled-components";
import { Video } from "../interfaces/Video";

const StyledVideoItem = styled.div`
  display: flex;
  margin: 16px;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: 500;
`;

const StyledDetails = styled.div`
  margin-inline-start: 8px;
`;

const StyledThumbnail = styled.img`
  object-fit: contain;
  height: 120px;
  background: black;
  width: 160px;
`;

const SecondaryText = styled.p`
  color: grey;
  font-size: small;
  margin: 0;
  margin-top: 4px;
`;

interface VideoItemProps {
  video: Video;
}

const VideoItem: FC<VideoItemProps> = ({ video: { snippet, id } }) => {
  const thumbnail = snippet.thumbnails.default;
  
  return (
    <StyledVideoItem>
      <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
      <StyledDetails>
        <StyledTitle>{snippet.title}</StyledTitle>
        <SecondaryText>{snippet.channelTitle}</SecondaryText>
      </StyledDetails>
    </StyledVideoItem>
  );
};

export default VideoItem;
