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
      background-image: linear-gradient(
        to bottom,
        #0044ff,
        #003aff,
        #002eff,
        #001ecc,
        #0000aa
      );
      padding: 1rem;
      text-align: center;
      cursor: pointer;
      border: double white;

      &:hover {
        background-image: linear-gradient(
          to bottom,
          #ff8303,
          #ff7900,
          #fe6e00,
          #fe5000,
          #fd4000
        );
      }
    }
  }
`;
