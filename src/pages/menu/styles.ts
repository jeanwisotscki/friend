import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  color: ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const Title = styled.h2`
  background: ${(props) => props.theme.colors.yellow};
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.yellow},
    ${(props) => props.theme.colors.orange}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;

  border: 0;
  outline: none;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    &::before {
      content: ">";
      margin-right: 0.5rem;
    }

    &::after {
      content: "<";
      margin-left: 0.5rem;
    }
  }
`;

export const ButtonOrangeOnHover = styled(MenuButton)`
  &:hover {
    background: ${(props) => props.theme.colors.yellow};
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.yellow},
      ${(props) => props.theme.colors.orange}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::before {
      content: "";
    }

    &::after {
      content: "";
    }
  }
`;
