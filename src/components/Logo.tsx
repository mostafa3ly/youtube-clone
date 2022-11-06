import { FC } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import mobileLogo from "../assets/logo-mobile.svg";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  letter-spacing: -1px;
`;

const DesktopImage = styled.img`
  height: -webkit-fill-available;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  height: -webkit-fill-available;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Brand = styled.div`
  display: flex;
  margin-inline-start: -7px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Name = styled.p`
  font-weight: 800;
  font-size: 22px;
  margin: 0;
`;

const CountryCode = styled.p`
  color: grey;
  font-size: 10px;
  font-weight: bold;
  margin-top: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo: FC = () => {
  return (
    <StyledLogo>
      <DesktopImage alt="Youtube" src={logo} />
      <MobileImage alt="Youtube" src={mobileLogo} />
      <Brand>
        <Name>YouTube</Name>
        <CountryCode>EG</CountryCode>
      </Brand>
    </StyledLogo>
  );
};

export default Logo;
