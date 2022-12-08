import styled, { keyframes } from "styled-components";

import breakpoints from "../common/breakpoints";

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

export const Container = styled.div`
  width: 100%;
`;

export const MainTextWrapper = styled.div`
  text-align: center;
  border: 2px solid transparent;
`;

export const MainText = styled.p`
  font-size: 6rem;
  text-transform: uppercase;

  transform-origin: 50% 0%;
  transform: perspective(300px) rotateX(45deg);

  background: rgb(0, 68, 255);
  background: linear-gradient(
    180deg,
    rgba(103, 34, 200, 1) 11%,
    rgba(0, 194, 255, 1) 64%,
    rgba(208, 208, 208, 1) 87%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: ${(props) => props.theme.colors.primary};
    font-size: 6rem;
    text-shadow: -0.25rem -0.25rem;
  }

  // < 1200
  @media screen and (${breakpoints.desktop}) {
    font-size: 5rem;

    &::before {
      font-size: 5rem;
    }
  }

  // < 900
  @media screen and (${breakpoints.tablet}) {
    font-size: 4rem;

    &::before {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 665px) {
    font-size: 3.5rem;

    &::before {
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 560px) {
    font-size: 3rem;

    &::before {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 455px) {
    font-size: 2.5rem;

    &::before {
      font-size: 2.5rem;
    }
  }

  @media screen and (${breakpoints.smartphone}) {
    font-size: 2rem;

    &::before {
      font-size: 2rem;
    }
  }
`;

export const PressStartWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;

  margin: 6rem 0;

  a {
    color: ${(props) => props.theme.colors.primary};

    padding: 1rem;

    transition: 0.2s;
    animation: ${PressStartAnimation} 2s forwards infinite;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
      animation: none;
    }
  }

  @media screen and (${breakpoints.desktop}) {
    a {
      font-size: 1rem;
    }
  }
  @media screen and (${breakpoints.tablet}) {
    a {
      font-size: 0.8rem;
    }
  }
  @media screen and (${breakpoints.smartphone}) {
    a {
      font-size: 0.6rem;
    }
  }
`;

export const CopyRightWrapper = styled.div`
  width: 100%;
  color: white;
  text-align: center;

  @media screen and (${breakpoints.desktop}) {
    p {
      font-size: 1rem;
    }
  }
  @media screen and (${breakpoints.tablet}) {
    p {
      font-size: 0.8rem;
    }
  }
  @media screen and (${breakpoints.smartphone}) {
    p {
      font-size: 0.6rem;
    }
  }
`;
