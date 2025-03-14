import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 864px;
    margin: 4rem auto 0;

    @media (max-width: 864px) {
        margin: 4rem auto 0;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 12px;

    h2 {
        font-size: 1.2rem;
        color: ${props => props.theme['base-subtitle']};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['base-label']};
    }

    @media (max-width: 864px) {
        margin: 4rem 2rem 1rem;
    }
`

export const List = styled.div`
    max-width: 864px;
    margin: 48px 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 32px;
    grid-column-gap: 32px;

    @media (max-width: 864px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 4rem 2rem 0;
    }


`