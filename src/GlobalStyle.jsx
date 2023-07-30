import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';
import { breakpoints } from './env/breakpoints';

const overflowBg = theme.colors.bg.c3;

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, 'Fira Sans', system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        @media screen and (max-width: ${breakpoints.w800}) {
            font-size: 14px;
        }

        @media screen and (max-width: ${breakpoints.w600}) {
            font-size: 12px;
        }

        @media screen and (max-width: ${breakpoints.w500}) {
            font-size: 10px;
        }

    }    
    
    #root {
        width: 100%;
        min-width: 320px;
    }

    ::-webkit-scrollbar {
        background: ${overflowBg};
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.bg.c5};
        border-radius: 50px;    
        border: 2px solid ${overflowBg};
        border-top: 3px solid ${overflowBg};
        border-bottom: 3px solid ${overflowBg};
    }

    * {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        list-style: none;
        text-decoration: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        background-color: ${({theme}) => theme.colors.bg.c1};
    }

    a {
        color: inherit;
    }

    h1, h2, h3, .highlightText {
        font-family: 'Fira Sans', sans-serif;
        letter-spacing: 1px;
    }
`;