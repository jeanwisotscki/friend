import styled, { keyframes } from "styled-components";

const Glitch = keyframes`  
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, 3px);
  }
  40% {
    transform: translate(-3px, -3px);
  }
  60% {
    transform: translate(3px, 3px);
  }
  80% {
    transform: translate(3px, -3px);
  }
  to {
    transform: translate(0);
  }
`;

export const TextGlitch = styled.p`
  position: relative;
  font-size: 4rem;
  text-transform: uppercase;
  z-index: 1;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  @media screen and (max-width: 444px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 297px) {
    font-size: 2rem;
  }

  &:before,
  &:after {
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }
  &:after {
    color: ${(props) => props.theme.colors.yellow};
    z-index: -2;
  }
  &:before {
    color: ${(props) => props.theme.colors.yellow};
    z-index: -1;
  }
  &:hover:before {
    -webkit-animation: ${Glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
      infinite;
    animation: ${Glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }
  &:hover:after {
    animation: ${Glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
      infinite;
  }
`;
