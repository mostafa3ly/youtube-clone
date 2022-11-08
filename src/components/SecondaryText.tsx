import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledSecondaryText = styled.p`
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


const SeondaryText: FC<PropsWithChildren> = ({ children }) => {
  return <StyledSecondaryText>{children}</StyledSecondaryText>;
};

export default SeondaryText;
