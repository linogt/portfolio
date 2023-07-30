import styled from 'styled-components';
import { BigParagraphBlack } from '../../styles/BigParagraph.style';
import { breakpoints } from '../../../env/breakpoints';
import { DecoTitleWhite } from '../../styles/DecoTitle.style';

export const ExperienceConteiner = styled.section`
    padding: 10rem 0;

    & section {
        grid-column: 6 / span 7;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        & ${BigParagraphBlack} {
            padding-bottom: 2rem;
        }
    }

    @media screen and (max-width: ${breakpoints.w1250}) {

        & ${DecoTitleWhite} {
            color: ${({theme}) => theme.colors.fg.c2}
        }

        & section {
            grid-column: span 12;
        }

    }

`;