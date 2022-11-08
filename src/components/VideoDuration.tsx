import { FC } from "react";
import styled from "styled-components";
import { convertDuration } from "../utils/convertDuration";

const StyledVideoDuration = styled.span`
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

interface VideoDurationProps {
  duration: string;
}

const VideoDuration: FC<VideoDurationProps> = ({ duration }) => {
  return <StyledVideoDuration>{convertDuration(duration)}</StyledVideoDuration>;
};

export default VideoDuration;
