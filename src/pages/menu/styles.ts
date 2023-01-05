import styled from "styled-components";
import breakpoints from "../../common/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 85vh;

  color: ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: column;

  padding: 3rem 0;
`;

export const Title = styled.h2`
  background: ${(props) => props.theme.colors.yellow};
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.primary}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-align: center;

  // 768px ou maior
  @media screen and (${breakpoints.medium}) {
    text-align: left;
  }
`;

export const MainMenuContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      list-style: none;
    }
  }
`;

export const MenuButton = styled.button`
  width: 100%;

  background: none;
  color: ${(props) => props.theme.colors.primary};

  position: relative;

  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;

  border: 0;
  outline: none;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    &::before {
      content: "|>";
      color: ${(props) => props.theme.colors.yellow};

      position: absolute;

      font-weight: bold;
      letter-spacing: -0.8rem;

      margin-left: -1.7rem;
    }

    &::after {
      content: "<|";
      color: ${(props) => props.theme.colors.yellow};

      position: absolute;

      font-weight: bold;
      letter-spacing: -0.95rem;

      margin-left: 0.5rem;
    }
  }
`;

export const ButtonYellowOnHover = styled(MenuButton)`
  &:hover {
    color: ${(props) => props.theme.colors.yellow};
  }
`;
