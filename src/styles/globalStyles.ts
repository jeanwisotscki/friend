import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Press Start 2P', cursive;
  }
  
  body {
    background: repeating-linear-gradient(
      0deg,
      #0E0D0E 25%,
      #0E0D0E 50%,
      #171819 50%,
      #171819 75%
    );
    background-size: 10px 10px;

    overflow-y: auto;
    overflow-x: hidden;

    scrollbar-width: thin; /* "auto" or "thin" */
    scrollbar-color: white black; /* scroll thumb and track */

    &::-webkit-scrollbar {
      width: 8px; /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: #020202; /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
      border: 3px solid #ccc; /* creates padding around scroll thumb */
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;
