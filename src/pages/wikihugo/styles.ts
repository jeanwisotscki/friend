import styled from "styled-components";

export const MainContainer = styled.div`
  color: ${(props) => props.theme.colors.primary};
  padding: 0 1rem;
`;

export const Header = styled.header`
  h2,
  hr {
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    font-size: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const MainContentWrapper = styled.main``;

export const AsideContainer = styled.aside`
  width: 300px;
  float: right;
  clear: right;
  margin: 0 0 1rem 1rem;
  border: double;
  text-align: center;

  & > span {
    display: block;
    color: ${(props) => props.theme.colors.onyx};
    background-color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    padding: 1rem;
    margin: 0.5rem;
  }

  @media screen and (max-width: 574px) {
    float: none;
    margin: auto;
  }
`;

export const PersonalInfos = styled.section`
  span {
    display: block;
    font-size: 0.6rem;
    color: ${(props) => props.theme.colors.onyx};
    background-color: ${(props) => props.theme.colors.secondary};
    margin: 0.5rem;
    padding: 0.5rem;
  }

  table {
    margin: 0.5rem;

    tr {
      td {
        font-size: 0.6rem;
        padding: 0.3rem;
        line-height: 1.4;

        &:first-child {
          color: ${(props) => props.theme.colors.onyx};
          background-color: ${(props) => props.theme.colors.secondary};
        }
      }
    }
  }
`;

const BaseSection = styled.section`
  p,
  strong,
  i,
  li {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  h2 {
    margin-top: 3rem;
  }

  hr {
    margin-bottom: 1.5rem;
  }

  p {
    margin: 1rem 0;
    text-align: justify;
  }
`;

export const Resume = styled(BaseSection)``;

export const History = styled(BaseSection)``;

export const Discography = styled(BaseSection)`
  & > div {
    margin: 2rem 0;
  }

  div {
    strong {
      font-size: 1.5rem;
    }

    ul {
      margin-top: 0.5rem;
      padding: 0 2rem;

      li {
        list-style: disc;
      }
    }
  }
`;
