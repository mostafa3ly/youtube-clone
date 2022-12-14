import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledListItem = styled.div`
  display: flex;
  height: 100px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    height: 140px;
  }
`;

const ListItem: FC<PropsWithChildren> = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
