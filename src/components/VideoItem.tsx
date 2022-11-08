import { FC } from "react";
import styled from "styled-components";
import { Video } from "../interfaces/Video";

const StyledVideoItem = styled.div`
  display: flex;
  height: 120px;
  margin: 16px 0;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: 500;
`;

const StyledDetails = styled.div`
  margin: 0 8px;
`;

const StyledThumbnail = styled.img`
  object-fit: contain;
  background: black;
  width: 160px;
`;

const SecondaryText = styled.p`
  color: grey;
  font-size: small;
  margin: 0;
`;

interface VideoItemProps {
  video: Video;
}

const VideoItem: FC<VideoItemProps> = ({ video: { snippet } }) => {
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
