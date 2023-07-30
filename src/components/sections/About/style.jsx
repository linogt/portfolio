import styled from 'styled-components';
import { DecoTitleBlack } from '../../styles/DecoTitle.style';
import { BigParagraphWhite } from '../../styles/BigParagraph.style';
import { breakpoints } from '../../../env/breakpoints';

export const EducationContainer = styled.section`
    background-color: ${({theme}) => theme.colors.fg.c5};
    color: ${({theme}) => theme.colors.bg.c5};
    padding: 10rem 0;

    & ${DecoTitleBlack} {
        width: 450px;
    }

    & section {
        grid-column: 6 / span 7;

        & ${BigParagraphWhite} {
            font-size: 1rem;
            line-height: 1.5rem;
            padding-bottom: 5rem;
        }

        & .education_cardHighlights {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 8rem;
        }

        & .education_courseHeader {
            display: flex;
            position: relative;

            & figure {
                position: absolute;
                width: 20px;
                height: 20px;
                left: -30px;

                & img {
                    width: 100%;
                }
            }

            @media screen and (min-width: ${breakpoints.w800}) {
                align-items: center;
            }
            
        }

        & .listCourses {
            margin: 2rem 0 4rem 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    & .dec {
        width: 120px;
        height: 120px;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center top;
        left: 12%;
        top: 32rem;
    }


    @media screen and (max-width: ${breakpoints.w1250}) {
        & ${DecoTitleBlack} {
            width: auto;
            color: ${({theme}) => theme.colors.bg.c3}
        }

        & section {
            grid-column: span 12;  
        }

        & .dec {
            display: none;
        }
    }

    @media screen and (max-width: ${breakpoints.w800}) {
        & .education_courseHeader {
            flex-direction: column;
            align-items: left;
            gap: 0.5rem;

            & figure {
                position: static !important;
            }

        }

        & .listCourseItem_progress, & .listCourseItem_progressFinished {
            position: static !important;
            width: auto !important;
        }
    }

    
`;