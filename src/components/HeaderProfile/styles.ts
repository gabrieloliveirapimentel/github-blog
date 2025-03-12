import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 2rem;

    padding: 40px 32px;
    margin-top: -5rem;

    max-width: 864px;
    height: 212px;

    border-radius: 10px;
    background-color: ${props => props.theme['base-profile']};

    img {
        width: 148px;
        border-radius: 8px;
        background-color: red;
    }
`

export const ProfileDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProfileDescription = styled.div``
export const ProfileDescriptionItem = styled.div``


export const ProfileNameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme['base-title']};
    }

    button {
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

        &:hover {
            border-bottom: 2px solid;
        }

        span {
            margin-top: 1px;
        }
    }
`

export const ProfileLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`

export const ProfileLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
`