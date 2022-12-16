import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  color: #fff;

  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const Title = styled.h2`
  background: #fff303;
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
  }
`;

export const MenuButton = styled.button`
  width: 100%;

  color: #fff;
  background: none;

  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;

  border: 0;
  outline: none;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.yellow};

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
    color: ${(props) => props.theme.colors.orange};
  }
`;
