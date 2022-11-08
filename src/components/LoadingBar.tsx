import { FC } from "react";
import styled, { keyframes } from "styled-components";

const StyledLoadingBar = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const rotate = keyframes`
  from{opacity: 1;}
  to  {opacity: 0.25;}
`;

const Dot = styled.div<{ index: number }>`
  position: absolute;
  background: grey;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  left: 50%;
  transform: ${(props) => `rotate(calc((${props.index} * 45deg)))`};
  transform-origin: 0 20px;
  animation: ${rotate} 1s linear infinite;
  animation-delay: ${props=> `-${props.index*0.125}s`};
`;

const LoadingBar: FC = () => {
  const renderDots = (dots: number): JSX.Element[] =>
    Array.from(Array(dots).keys()).map((dot) => <Dot key={dot} index={dot} />);

  return <StyledLoadingBar>{renderDots(8)}</StyledLoadingBar>;
};

export default LoadingBar;
