import { FC } from "react";
import styled from "styled-components";
import { Channel } from "../interfaces/Channel";

const StyledChannelItem = styled.div`
  display: flex;
  height: 120px;
  margin: 16px 0;
`;

const StyledDetails = styled.div`
  margin: auto 8px;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: 500;
`;

const StyledThumbnail = styled.img`
  object-fit: contain;
  border-radius: 50%;
`;

const SecondaryText = styled.p`
  color: grey;
  font-size: small;
  margin: 0;
`;

interface ChannelItemProps {
  channel: Channel;
}

const ChannelItem: FC<ChannelItemProps> = ({ channel: { snippet } }) => {
  const thumbnail = snippet.thumbnails.default;

  return (
    <StyledChannelItem>
      <StyledThumbnail src={thumbnail.url} alt={snippet.title} />
      <StyledDetails>
        <StyledTitle>{snippet.title}</StyledTitle>
        <SecondaryText>{snippet.channelTitle}</SecondaryText>
      </StyledDetails>
    </StyledChannelItem>
  );
};

export default ChannelItem;
