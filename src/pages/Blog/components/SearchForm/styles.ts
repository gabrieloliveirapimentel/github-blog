import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        padding: 1rem;

        height: 44px;
        
        border-radius: 6px;
        border: 1px solid;
        border-color: ${props => props.theme['base-border']};

        background: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-text']};

        &::placeholder {
            color: ${props => props.theme['base-label']};
        }
    }
`