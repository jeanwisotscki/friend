import styled, { keyframes } from "styled-components";

import breakpoints from "../../common/breakpoints";

const PressStartAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const MainWrapper = styled.main`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 50rem;
`;

export const LogoWrapper = styled.div`
  padding: 1rem;

  img {
    width: 100%;
    max-height: 300px;
    height: auto;
  }
`;

export const PressStartWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;

  margin: 6rem 0;

  a {
    color: ${(props) => props.theme.colors.primary};

    padding: 1rem;

    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    -moz-transition: 0.2s;
    transition: 0.2s;

    -webkit-animation: ${PressStartAnimation} 2s forwards infinite;
    -moz-animation: ${PressStartAnimation} 2s forwards infinite;
    -o-animation: ${PressStartAnimation} 2s forwards infinite;
    animation: ${PressStartAnimation} 2s forwards infinite;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};

      -webkit-animation: none;
      -moz-animation: none;
      -o-animation: none;
      animation: none;
    }
  }

  @media screen and (${breakpoints.xtSmall}) {
    a {
      font-size: 0.6rem;
    }
  }
  @media screen and (${breakpoints.small}) {
    a {
      font-size: 0.8rem;
    }
  }
  @media screen and (${breakpoints.medium}) {
    a {
      font-size: 1rem;
    }
  }
`;

export const CopyRightWrapper = styled.div`
  width: 100%;
  color: white;
  text-align: center;

  @media screen and (${breakpoints.xtSmall}) {
    p {
      font-size: 0.5rem;
    }
  }
  @media screen and (${breakpoints.small}) {
    p {
      font-size: 0.6rem;
    }
  }
  @media screen and (${breakpoints.medium}) {
    p {
      font-size: 0.8rem;
    }
  }
`;
