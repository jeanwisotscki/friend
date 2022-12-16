import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.primary};

  hr {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.2rem;
    }
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
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  div {
    padding: 1rem;

    h3 {
      font-size: 1rem;
      line-height: 1.3;
    }

    p {
      font-size: 0.8rem;
      color: orange;
      margin-top: 0.3rem;
    }

    span {
      font-size: 0.8rem;
    }

    a {
      display: block;
      background-color: orange;
      color: ${(props) => props.theme.colors.onyx};
      padding: 0.5rem;
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 15px;
      text-align: center;
      transition: 0.2s;

      &:hover {
        background-color: ${(props) => props.theme.colors.yellow};
      }
    }
  }
`;
