import { FC } from "react";
import styled from "styled-components";
import { PLaylist } from "../interfaces/Playlist";

const StyledPlaylistItem = styled.div`
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

interface PlaylistItemProps {
  playlist: PLaylist;
}

const PlaylistItem: FC<PlaylistItemProps> = ({ playlist: { snippet } }) => {
  const thumbnail = snippet.thumbnails.default;
  
  return (
    <StyledPlaylistItem>
      <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
      <StyledDetails>
        <StyledTitle>{snippet.title}</StyledTitle>
        <SecondaryText>{snippet.channelTitle}</SecondaryText>
      </StyledDetails>
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;
