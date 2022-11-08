import { FC } from "react";
import styled from "styled-components";
import { PLaylist } from "../interfaces/Playlist";

const StyledPlaylistItem = styled.div`
  display: flex;
  height: 100px;
  margin: 16px 0;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 0.8em;
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

const StyledThumbnail = styled.img`
  object-fit: cover;
  background: black;
  min-width: 160px;
  max-width: 160px;
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

interface PlaylistItemProps {
  playlist: PLaylist;
}

const PlaylistItem: FC<PlaylistItemProps> = ({ playlist: { snippet, contentDetails } }) => {
  const thumbnail = snippet.thumbnails.default;

  return (
    <StyledPlaylistItem>
      <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
      <StyledDetails>
        <StyledTitle>{snippet.title}</StyledTitle>
        <SecondaryText>{snippet.channelTitle}</SecondaryText>
        <SecondaryText>{contentDetails.itemCount} items</SecondaryText>
      </StyledDetails>
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;
