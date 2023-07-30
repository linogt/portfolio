import styled from 'styled-components';

export const ListCourseItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
    position: relative;

    & div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & p {
            color: ${({theme}) => theme.colors.bg.c5};
            font-size: 0.75rem;
            text-align: right;
        }

        & .listCourseItem_progress, & .listCourseItem_progressFinished {
            position: absolute;
            left: -50px;
            width: 40px;
        }

        & .listCourseItem_progressFinished {
            color: ${({theme}) => theme.colors.primary.p1};
        }

        & h3 {
            color: ${({theme}) => theme.colors.bg.c3};
            letter-spacing: 0px;
            font-weight: 400;
            font-size: 1.25rem;
        }
    }

    & > p {
        color: ${({theme}) => theme.colors.bg.c4};
        font-size: 1rem;
        text-align: right;
    }
`;