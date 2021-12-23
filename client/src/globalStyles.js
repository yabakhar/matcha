import { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';

// export const CenterStyle = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'DidactGothic', sans-serif;
    font-size: calc(0.75em + 1vmin);
    width: 100%;
    height: 100vh;
  }
`;
export default GlobalStyle;
