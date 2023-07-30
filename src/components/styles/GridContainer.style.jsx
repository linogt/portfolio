import styled from 'styled-components';
import { breakpoints } from '../../env/breakpoints';

export const GridContainer = styled.div`
    position: relative;
    max-width: 2000px;
    margin: 0 auto;
    padding: 0 12%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 16px;

    @media screen and (max-width: ${breakpoints.w800}) {
        padding: 0 8%;
    }

    @media screen and (max-width: ${breakpoints.w500}) {
        padding: 0 6%;
    }
`;