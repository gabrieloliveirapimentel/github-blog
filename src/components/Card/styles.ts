import styled from "styled-components"

export const Container = styled.div`
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;

    width: 416px;
    padding: 32px;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: space-between;

    gap: 16px;

    a {
        line-height: 1.8rem;
        text-decoration: none;

        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.theme["base-title"]};

        &:hover {
            color: ${props => props.theme["base-text"]};
        }
    }
    
    span {
        margin-top: 6px;
        width: 80px;
        
        font-size: 0.875rem;
        color: ${props => props.theme["base-label"]};
    }
`

export const Description = styled.span`
    margin-top: 16px;
    color: ${props => props.theme["base-text"]};
    display: -webkit-box;

    overflow: hidden;
    text-overflow: ellipsis;
    
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
`





