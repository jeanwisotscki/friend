import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

    overflow: hidden;

    scrollbar-width: thin; /* firefox */
    scrollbar-color: #333 #aaa; /* firefox */
  }

  body::-webkit-scrollbar {
    width: 3px;
  }
  body::-webkit-scrollbar-track {
    background: #aaa;
    padding: 2px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  
  button {
    outline: none;
    cursor: pointer;
  }
`;
