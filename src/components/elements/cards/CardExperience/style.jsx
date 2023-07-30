import styled from 'styled-components';
import { GridContainer } from '../../../styles/GridContainer.style';

const breakpoints = {
    w1280: "1280px"
};

export const CardContainer = styled.div`
    & ${GridContainer} {
        margin: 0;
        background-color: ${({theme}) => theme.colors.bg.c2};
        border: 1px solid ${({theme}) => theme.colors.bg.c3};
        border-radius: 8px;
        padding: 1.5rem;
        gap: 32px;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);

        @media screen and (max-width: ${breakpoints.w1280}) {
            display: flex;
            flex-direction: column;
        }
    }

    & h3, h4 {
        margin-bottom: 1rem;
    }
    
    & .cardExp_content {
        grid-column: span 7;
        
        & span {
            position: relative;
            width: auto;
            left: 0;
            text-align: end;
            color: ${({theme}) => theme.colors.bg.c5};
            font-size: 0.8rem;
            line-height: 1.5rem;
            user-select: none;

            @media screen and (max-width: ${breakpoints.w1280}) {
                position: relative;
                width: auto;
                left: 0;
            }
        }

        & h3 {
            font-size: 1.25rem;
            line-height: 1.5rem;
            font-weight: 700;
            color: ${({theme}) => theme.colors.fg.c4};
        }

        &::before {
                content: '';
                position: absolute;
                left: -4px;
                width: 4px;
                height: 1.5rem;
                border-radius: 1px 0 0 1px;
                background: ${({theme}) => theme.colors.gradient.g1.toBottom}
        }
    }

    & .cardExp_tags_wrapper {
        grid-column: span 5;
        grid-column-end: -1;

        & h4 {
            color: ${({theme}) => theme.colors.bg.c4};
        }

        & .cardExp_tags {
            display: flex;
            gap: 0.5rem;
            flex-flow: wrap;

            & span {
                background-color: ${({theme}) => theme.colors.fg.c2};
                color: ${({theme}) => theme.colors.bg.c1};
                padding: 0.25rem 0.5rem;
                border-radius: 4px;
                font-weight: 600;
                user-select: none;
            }
        }
    }
`;