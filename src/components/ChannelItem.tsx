import { FC } from "react";
import styled from "styled-components";
import { Channel } from "../interfaces/Channel";
import { addCommasToNumbers } from "../utils/addCommasToNumbers";
import ListItem from "./ListItem";
import SecondaryText from "./SecondaryText";
import Title from "./Title";

const StyledDetails = styled.div`
  margin: auto 8px;
`;

const StyledThumbnail = styled.img`
  object-fit: contain;
  border-radius: 50%;
  min-width: 100px;
  max-width: 100px;
  height: 100px;
  margin: auto 0;
  @media (min-width: 768px) {
    min-width: 140px;
    max-width: 140px;
    height: 140px;
  }
`;

interface ChannelItemProps {
  channel: Channel;
}

const ChannelItem: FC<ChannelItemProps> = ({
  channel: {
    snippet,
    statistics: { subscriberCount, videoCount },
  },
}) => {
  const thumbnail = snippet.thumbnails.default;

  return (
    <ListItem>
      <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
      <StyledDetails>
        <Title>{snippet.title}</Title>
        <SecondaryText>{addCommasToNumbers(+videoCount)} videos</SecondaryText>
        <SecondaryText>
          {addCommasToNumbers(+subscriberCount)} subscribers
        </SecondaryText>
      </StyledDetails>
    </ListItem>
  );
};

export default ChannelItem;
