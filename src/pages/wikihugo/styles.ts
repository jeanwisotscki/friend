import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  padding: 0 1rem;
  padding-bottom: 3rem;
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
    color: #020202;
    background-color: #ccc;
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
    color: #020202;
    background-color: #ccc;
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
          color: #020202;
          background-color: #ccc;
        }
      }
    }
  }
`;

export const TextContainer = styled.div`
  width: 100%;

  p {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    margin: 1rem 0;
    text-align: justify;

    strong,
    i {
      font-family: Roboto, Arial, Helvetica, sans-serif;
    }
  }

  h2 {
    margin-top: 2.5rem;
  }

  hr {
    margin: 0.5rem 0;
  }
`;
