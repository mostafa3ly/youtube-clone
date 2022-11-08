import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

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

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
