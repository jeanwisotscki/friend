import styled from "styled-components";

export const MainTextWrapper = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  div {
    width: 100%;
    margin-top: 2rem;
    color: white;
    text-align: right;
  }
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

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 5rem;
    text-shadow: -5px -5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 4rem;

    &::before {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 444px) {
    font-size: 2.5rem;

    &::before {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 297px) {
    font-size: 2rem;

    &::before {
      font-size: 2rem;
    }
  }
`;

export const LinkWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;

  a {
    color: ${(props) => props.theme.colors.primary};
    padding: 1rem;
    transition: 0.2s;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};

      &::before {
        content: ">";
        width: 10px;
        height: 10px;
        position: absolute;
        left: -10px;
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 444px) {
    a {
      font-size: 0.8rem;
    }
  }
`;
