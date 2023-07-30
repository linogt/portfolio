import styled from 'styled-components';
import { breakpoints } from '../../env/breakpoints';

const DecoTitle = styled.h2`
        grid-column: span 4;
        width: 400px;
        font-size: 10rem;
        line-height: 10rem;
        text-transform: uppercase;
        word-wrap: break-word;

        @media screen and (max-width: ${breakpoints.w1250}) {
            grid-column: span 12;
            width: 10%;
            font-size: 4rem;
            line-height: 5rem;
            margin-bottom: 2rem;
            word-wrap: normal;
        }
`;

export const DecoTitleWhite = styled(DecoTitle)`
    color: ${({theme}) => theme.colors.bg.c2};
`;

export const DecoTitleBlack = styled(DecoTitle)`
        color: ${({theme}) => theme.colors.fg.c6};
    `;