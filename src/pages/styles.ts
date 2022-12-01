import styled, { keyframes } from "styled-components";

const glitch = keyframes`
0% {
    clip: rect(83px, 9999px, 81px, 0);
  }
  5% {
    clip: rect(29px, 9999px, 68px, 0);
  }
  10% {
    clip: rect(63px, 9999px, 20px, 0);
  }
  15% {
    clip: rect(32px, 9999px, 24px, 0);
  }
  20% {
    clip: rect(2px, 9999px, 65px, 0);
  }
  25% {
    clip: rect(30px, 9999px, 70px, 0);
  }
  30% {
    clip: rect(73px, 9999px, 27px, 0);
  }
  35% {
    clip: rect(21px, 9999px, 72px, 0);
  }
  40% {
    clip: rect(73px, 9999px, 33px, 0);
  }
  45% {
    clip: rect(57px, 9999px, 26px, 0);
  }
  50% {
    clip: rect(40px, 9999px, 100px, 0);
  }
  55% {
    clip: rect(13px, 9999px, 48px, 0);
  }
  60% {
    clip: rect(90px, 9999px, 38px, 0);
  }
  65% {
    clip: rect(70px, 9999px, 14px, 0);
  }
  70% {
    clip: rect(32px, 9999px, 86px, 0);
  }
  75% {
    clip: rect(66px, 9999px, 21px, 0);
  }
  80% {
    clip: rect(37px, 9999px, 25px, 0);
  }
  85% {
    clip: rect(28px, 9999px, 94px, 0);
  }
  90% {
    clip: rect(40px, 9999px, 23px, 0);
  }
  95% {
    clip: rect(59px, 9999px, 4px, 0);
  }
  100% {
    clip: rect(81px, 9999px, 20px, 0);
  }

`;

export const Container = styled.div`
  max-width: 50rem;
  width: 80%;
  margin: 0 auto;
`;

export const GlitchWrapper = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GlitchText = styled.p`
  position: relative;
  margin: 0 auto;
  color: #fff;

  font-size: 4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  transform: scale3d(1, 1, 1);

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;

    background: repeating-linear-gradient(
      0deg,
      #0e0d0e 25%,
      #0e0d0e 50%,
      #171819 50%,
      #171819 75%
    );
    background-size: 10px 10px;

    color: #fff;
    clip: rect(0, 900px, 0, 0);
  }
  &::before {
    left: 7px;
    text-shadow: 1px 5 green;
    animation: ${glitch} 3s infinite linear alternate-reverse;
  }
  &::after {
    left: 3px;
    text-shadow: -1px 0 red;
    animation: ${glitch} 2s infinite linear alternate-reverse;
  }
`;

export const LinkWrapper = styled.div`
  text-align: right;

  a {
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }

  @media screen and (max-width: 444px) {
    a {
      font-size: 0.8rem;
    }
  }
`;
