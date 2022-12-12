import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin: 3rem 0;

    li {
      border: double;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem 0;
      transition: 0.2s;

      &:hover {
        background: #002eff;
        background-image: linear-gradient(to bottom, #77ccff, #0044ff, #001edd);
      }

      div {
        text-align: center;
        margin: 0.5rem;
      }

      span {
        flex: 1;
        padding: 1rem;
        font-size: 1rem;
      }
    }
  }
`;
