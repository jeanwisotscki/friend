import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 0;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  text-transform: uppercase;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  background: none;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #002eff;
    background-image: linear-gradient(
      to bottom,
      #77ccff,
      #77ccff,
      #0044ff,
      #001edd,
      #0000aa
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ButtonOrangeOnHover = styled(MenuButton)`
  &:hover {
    background: #fe6e00;
    background-image: linear-gradient(
      to bottom,
      #fff303,
      #fff900,
      #fe6e00,
      #fe5000,
      #fd1000
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
