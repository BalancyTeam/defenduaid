import { createGlobalStyle, keyframes } from "styled-components";

export const hoverAnimation = keyframes`
  0% {
    background: #141414;
  }
  100% {
    background: linear-gradient(91.66deg, #E9ACF3 14.96%, #8A56FA 92.43%, #874FF9 112.33%);
  }
`

export const GlobalStyles = createGlobalStyle`

  :root {   
    font-size: ${({ theme }) => theme.fontSizes.s};
    color:${({ theme }) => theme.colors.primary} ;
    background-color: ${({ theme }) => theme.colors.background}; 
  }

  * {
    box-sizing: border-box;
  }

  body { 
    margin: 0 ;
    padding: 0;  
    width: 100vw;
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;  
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: ${({ theme }) => theme.lineHeights.heading};    
    margin: 0;
    padding: 0;
  }

  ul, li, ol {  
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }


  a {
    text-decoration: none;   
  } 

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
