import { FC } from "react";
import styled from "styled-components";
import { PLaylist } from "../interfaces/Playlist";
import ListItem from "./ListItem";
import SecondaryText from "./SecondaryText";
import Title from "./Title";

const StyledDetails = styled.div`
  margin: 0 8px;
`;

const StyledThumbnail = styled.img`
  object-fit: cover;
  background: black;
  min-width: 160px;
  max-width: 160px;
  @media (min-width: 768px) {
    min-width: 220px;
    max-width: 220px;
  }
`;

interface PlaylistItemProps {
  playlist: PLaylist;
}

const PlaylistItem: FC<PlaylistItemProps> = ({
  playlist: { snippet, contentDetails },
}) => {
  const thumbnail = snippet.thumbnails.default;

  return (
    <ListItem>
      <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
      <StyledDetails>
        <Title>{snippet.title}</Title>
        <SecondaryText>{snippet.channelTitle}</SecondaryText>
        <SecondaryText>{contentDetails.itemCount} items</SecondaryText>
      </StyledDetails>
    </ListItem>
  );
};

export default PlaylistItem;
