import styled from 'styled-components';
import { breakpoints } from '../../../env/breakpoints';

export const HeaderContainer = styled.header`
    background-color: ${({theme}) => theme.colors.bg.c1};;
    position: sticky;
    top: 0;
    padding: 2rem 0 1.5rem 0;
    z-index: 1000;

    & h2 {
        font-family: 'Fira Sans', sans-serif;
        font-size: 2.5rem;
        color: ${({theme}) => theme.colors.fg.c4};
        grid-column: span 6;
    }

    & ul {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 32px;
        color: ${({theme}) => theme.colors.fg.c3};
        grid-column: span 4;
        grid-column-end: -1;

        li {
            cursor: pointer;
            transition: all .2s ease-out;

            &:hover {
                color: ${({theme}) => theme.colors.primary.p1};
                border-bottom: 1px solid ${({theme}) => theme.colors.primary.p1};
            }
        }
    }

    
`;