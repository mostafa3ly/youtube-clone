import { FC } from "react";
import styled from "styled-components";
import { Channel } from "../interfaces/Channel";
import { addCommasToNumbers } from "../utils/addCommasToNumbers";

const StyledChannelItem = styled.div`
  display: flex;
  height: 100px;
  margin: 16px 0;
`;

const StyledDetails = styled.div`
  margin: auto 8px;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: .8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const StyledThumbnail = styled.img`
  object-fit: contain;
  border-radius: 50%;
  min-width: 100px;
  max-width: 100px;
  height: 100px;
  margin: auto 0;
`;

const SecondaryText = styled.p`
  color: grey;
  font-size: .7em;
  margin: 0;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
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
    <StyledChannelItem>
      <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
      <StyledDetails>
        <StyledTitle>{snippet.title}</StyledTitle>
        <SecondaryText>{addCommasToNumbers(+videoCount)} videos</SecondaryText>
        <SecondaryText>{addCommasToNumbers(+subscriberCount)} subscribers</SecondaryText>
      </StyledDetails>
    </StyledChannelItem>
  );
};

export default ChannelItem;
