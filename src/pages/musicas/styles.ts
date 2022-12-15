import styled from "styled-components";

export const Container = styled.div`
  color: #fff;

  hr {
    margin: 0.5rem 0;
  }
`;

export const SongsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 2rem;

  margin-top: 2rem;
`;

export const SongCard = styled.div`
  min-height: 420px;
  max-width: 256px;
  display: flex;
  flex-direction: column;
  border: double;
  position: relative;
  transition: 0.2s;

  &:hover {
    transform: scale(1.051);
  }

  div {
    padding: 1rem;

    h3 {
      font-size: 1rem;
      line-height: 1.3;
    }

    p {
      line-height: 1.3;
      font-size: 0.8rem;
      color: cyan;
    }

    a {
      display: block;
      background-color: #bbb;
      color: #000;
      padding: 0.5rem;
      position: absolute;
      left: 20px;
      bottom: 15px;

      &:hover {
        background-color: #ffffff;
      }
    }
  }
`;
