import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  color: #fff;
`;

export const SongsWrap = styled.div`
  height: 80vh;
  padding: 1rem;
  overflow-y: scroll;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: orange; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: blue; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid orange; /* creates padding around scroll thumb */
  }
`;

export const SongCard = styled.div`
  border: double;
  margin: 1rem 0;
  display: flex;
  gap: 2rem;
  overflow: hidden;
  position: relative;

  div {
    padding: 2rem;

    a {
      background-color: red;
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }
`;
