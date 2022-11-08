import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledListItem = styled.div`
  display: flex;
  height: 100px;
  margin: 16px 0;
`;

const ListItem: FC<PropsWithChildren> = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
