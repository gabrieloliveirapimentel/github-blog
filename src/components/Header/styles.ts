import styled from "styled-components"
import coverImg from '../../assets/cover.png'

export const Container = styled.header`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
    background-image: url(${coverImg});
    background-size: cover;
    background-position: center;

    @media (max-width: 768px) {
        padding: 2rem 0 6rem;
    }

    @media (max-width: 480px) {
        padding: 1.5rem 0 5rem;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 1rem;
    }

    @media (max-width: 480px) {
        padding: 0 0.5rem;
    }
`
