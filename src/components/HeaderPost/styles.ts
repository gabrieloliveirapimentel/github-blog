import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    padding: 32px;
    margin-top: -5rem;

    max-width: 864px;

    border-radius: 10px;
    background-color: ${props => props.theme['base-profile']};


    @media (max-width: 864px) {
        margin: -5rem  24px 0 24px;
    }

    @media (max-width: 768px) {
        align-items: center;
        height: auto;
    }
`

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 1.4rem;

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 8px;
        color: ${props => props.theme.blue};

        background: transparent;
        border: none;

        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;

        &:hover {
            border-bottom: 2px solid;
        }

        span {
            margin-top: 1px;
        }
    }
`

export const Title = styled.h2`
    font-size: 1.5rem;
    color: ${props => props.theme['base-title']};
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    margin-top: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 24px;
    }
`

export const Link = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
    
    span {
        color: ${props => props.theme['base-span']};
    }
`