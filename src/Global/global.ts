import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  :root {
    --blue-dark: #03045e;
    --blue-medium: #0077b6;
    --blue-light: #00b4d8;
    --blue-grey: #90e0ef;
    --gray-medium: #415a77;
    --gray-light: #e0e1dd;
    --white: #fff;
    --purple: #2b2d42;
    --gray: #444;
  };

  body,html{
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-x: hidden;

    background-color: var(--blue-dark);
    color: var(--white);
    }


  body {
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

  }
  body, input, button, textarea {
    font-family: 'Poppins';
  }
  button {
    text-align: center;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background-color: #1d1d1d;
    width: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 5px;
  }
`;
