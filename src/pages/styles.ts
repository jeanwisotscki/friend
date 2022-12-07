import styled from "styled-components";

export const GlitchWrapper = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const MainText = styled.p`
  font-size: 5rem;
  text-transform: uppercase;

  transform-origin: 50% 0%;
  transform: perspective(300px) rotateX(45deg);

  background: rgb(0, 68, 255);
  background: linear-gradient(
    180deg,
    rgba(103, 34, 200, 1) 11%,
    rgba(0, 194, 255, 1) 54%,
    rgba(238, 238, 238, 1) 87%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 444px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 297px) {
    font-size: 2rem;
  }
`;

export const LinkWrapper = styled.div`
  text-align: right;

  a {
    color: ${(props) => props.theme.colors.primary};
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
