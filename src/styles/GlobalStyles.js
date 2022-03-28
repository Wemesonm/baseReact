import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${primaryDarkColor};
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #FFF;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;

  }

  body, html, #root {
    height: 100%;
    background: ${primaryDarkColor};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 0%;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
`;
