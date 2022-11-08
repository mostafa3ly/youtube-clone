import { FC } from "react";
import styled from "styled-components";
import { Video } from "../interfaces/Video";
import { addCommasToNumbers } from "../utils/addCommasToNumbers";
import { convertDuration } from "../utils/convertDuration";

const StyledVideoItem = styled.div`
  display: flex;
  height: 100px;
  margin: 16px 0;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: .8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

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
const Duration = styled.span`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 2px 4px;
  border-radius: 4px;
  color: white;
  font-size: x-small;
  font-weight: 600;
`;
const SecondaryText = styled.p`
  color: grey;
  font-size: 0.7em;
  margin: 0;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
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
    <StyledVideoItem>
      <ThumbnailContainer>
        <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
        <Duration>{convertDuration(duration)}</Duration>
      </ThumbnailContainer>
      <StyledDetails>
        <StyledTitle>{snippet.title}</StyledTitle>
        <SecondaryText>{snippet.channelTitle}</SecondaryText>
        <SecondaryText>{addCommasToNumbers(+viewCount)} views</SecondaryText>
      </StyledDetails>
    </StyledVideoItem>
  );
};

export default VideoItem;
