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

export const PerspectiveTextWrapper = styled.div`
  text-align: center;
  border: 2px solid transparent;
`;

export const PerspectiveText = styled.span`
  display: block;

  font-size: 6rem;
  text-transform: uppercase;

  transform-origin: 50% 0%;
  transform: perspective(300px) rotateX(45deg);

  background: ${(props) => props.theme.colors.orange};
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.orange},
    ${(props) => props.theme.colors.yellow}
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
  @media screen and (${breakpoints.xtLarge}) {
    font-size: 5rem;

    &::before {
      font-size: 5rem;
    }
  }

  // < 900
  @media screen and (${breakpoints.large}) {
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

  @media screen and (${breakpoints.medium}) {
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

  @media screen and (${breakpoints.xtLarge}) {
    a {
      font-size: 1rem;
    }
  }
  @media screen and (${breakpoints.large}) {
    a {
      font-size: 0.8rem;
    }
  }
  @media screen and (${breakpoints.medium}) {
    a {
      font-size: 0.6rem;
    }
  }
`;

export const CopyRightWrapper = styled.div`
  width: 100%;
  color: white;
  text-align: center;

  @media screen and (${breakpoints.xtLarge}) {
    p {
      font-size: 1rem;
    }
  }
  @media screen and (${breakpoints.large}) {
    p {
      font-size: 0.8rem;
    }
  }
  @media screen and (${breakpoints.medium}) {
    p {
      font-size: 0.6rem;
    }
  }
`;
