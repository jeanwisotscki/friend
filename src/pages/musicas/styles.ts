import styled from "styled-components";
import breakpoints from "../../common/breakpoints";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.primary};

  h2 {
    font-size: 1.2rem;
  }

  hr {
    margin: 0.5rem 0;
  }

  @media screen and (${breakpoints.medium}) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const SongsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  margin-top: 2rem;
`;

export const SongCard = styled.div`
  max-width: 256px;
  min-height: 420px;

  display: flex;
  flex-direction: column;

  position: relative;

  border: double;
  overflow: hidden;
  transition: 0.2s;

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
      color: ${(props) => props.theme.colors.orange};
      font-size: 0.8rem;
      margin-top: 0.3rem;
    }

    span {
      font-size: 0.8rem;
    }

    a {
      display: block;

      color: ${(props) => props.theme.colors.onyx};
      background-color: ${(props) => props.theme.colors.orange};

      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 15px;

      text-align: center;

      padding: 0.5rem;
      transition: 0.2s;

      &:hover {
        background-color: ${(props) => props.theme.colors.yellow};
      }
    }
  }
`;
