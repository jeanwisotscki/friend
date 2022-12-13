import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
`;

export const AsideContainer = styled.aside`
  min-width: 300px;
  float: right;
  clear: right;
  margin: 1rem;
  border: 1px solid white;
  text-align: center;

  p {
    color: #020202;
    background-color: #ccc;
    text-align: center;
    padding: 1rem;
    margin: 0.5rem;
  }

  span {
    display: block;
    font-size: 0.7rem;
    color: #020202;
    background-color: #ccc;
    text-align: center;
    padding: 0.2rem;
    margin: 0.5rem;
  }

  tr {
    display: block;
    background-color: #bba;
    margin: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  gap: 1rem;
`;

export const Texts = styled.div`
  width: 100%;

  border: 2px solid red;
`;
