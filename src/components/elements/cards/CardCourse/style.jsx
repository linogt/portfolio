import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 150px;
    min-width: 150px;
    background-color: ${({theme}) => theme.colors.fg.c6};
    color: ${({theme}) => theme.colors.bg.c5};
    border: 1px solid #1A1B1B;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 1.5rem;

    & .cardKnow_main {
        & p {
            font-size: 0.75rem;
            line-height: 1.25rem;
            margin-bottom: 0.25rem;
        }
        
        & h3 {
            font-size: 1.25rem;
            color: ${({theme}) => theme.colors.bg.c3};
            

            &::before {
                content: '';
                position: absolute;
                left: -5px;
                width: 4px;
                height: 1.75rem;
                border-radius: 1px 0 0 1px;
                background: ${({theme}) => theme.colors.gradient.g1.toBottom}
            }
        }
    }
`;