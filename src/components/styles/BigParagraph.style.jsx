import styled from 'styled-components';

const BigParagraph = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
`;

export const BigParagraphWhite = styled(BigParagraph)`
    color: ${({theme}) => theme.colors.bg.c4};

    & strong {
        color: ${({theme}) => theme.colors.bg.c3};
    }
`;

export const BigParagraphBlack = styled(BigParagraph)`
    color: ${({theme}) => theme.colors.fg.c1};

    & strong {
        color: ${({theme}) => theme.colors.fg.c4};
    }
`;