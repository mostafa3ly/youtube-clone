import { FC } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: -1px;
  flex-grow: 1;
`;

const Name = styled.p`
  font-weight: 800;
  font-size: 1.5em;
  margin-inline-start: -8px;
`;

const CountryCode = styled.p`
  color: grey;
  font-size: 0.5em;
  font-weight: bold;
  margin-top: 0;
  margin-inline-start: 2px;
`;

const DesktopLogo: FC = () => {
  return (
    <StyledLogo>
      <img alt="Youtube" src={logo} height="100%" />
      <Name>YouTube</Name>
      <CountryCode>EG</CountryCode>
    </StyledLogo>
  );
};

export default DesktopLogo;
