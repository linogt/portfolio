import styled from 'styled-components';
import { GridContainer } from '../../styles/GridContainer.style';
import { breakpoints } from '../../../env/breakpoints';

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.colors.fg.c6};
    color: ${({theme}) => theme.colors.bg.c6};
    position: relative;

    & .footer_content {
        padding-top: 10rem;
        padding-bottom: 10rem;

        & p {
            grid-column: span 4;
            font-size: 1.5rem;
        }

        & div {
            grid-column: span 8;

            & ul {
                display: flex;
                flex-direction: column;
                align-items: end;
                color: ${({theme}) => theme.colors.bg.c1};
                font-size: 2.5rem;
                font-weight: 700;
            }
        }
    }

    & .footer_copyright {
        padding-bottom: 3rem;

        p {
            color: ${({theme}) => theme.colors.fg.c3};
            grid-column: span 12;
            font-weight: 700;
        }
    }

    & .footer_dec {
        position: absolute;
        left: 0;
        top: calc(-0.635rem / 2);
        width: 100%;

        & span:nth-child(1) {
            position: absolute;
            width: 20%;
            max-width: 400px;
            height: 0.635rem;
            background: ${({theme}) => theme.colors.gradient.g1.toBottom};
            border-radius: 0 2px 2px 0;
        }

        & span:nth-child(2) {
            position: absolute;
            width: 3%;
            max-width: 100px;
            height: 0.635rem;
            left: calc(min(20%, 400px) + 0.75rem);
            background: ${({theme}) => theme.colors.gradient.g1.toBottom};
            border-radius: 2px;
        }
    }

    
    @media screen and (max-width: ${breakpoints.w1250}) {
        & .footer_content {
            & p, & div {
                grid-column: span 12;  
                text-align: center;
            }

            & div > ul {
                margin-top: 2rem;
                align-items: center;
            }
        }
    }
`;