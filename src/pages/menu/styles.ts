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
    gap: 1rem;

    li {
      background-color: blue;
      padding: 1rem;
      text-align: center;
      cursor: pointer;
      border: double white;
      transition: 0.2s;

      &:hover {
        background-color: orange;
      }
    }
  }
`;
