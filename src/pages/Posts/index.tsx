import { useParams } from "react-router-dom";
import { HeaderPost } from "../../components/HeaderPost";
import { Container } from "./styles";
import { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/types";
import ReactMarkdown from "react-markdown";

export function Posts() {
    const { postId } = useParams()
    const { issue, fetchIssueById } = useContext(ProfileContext)

    useEffect(() => {
        fetchIssueById(Number(postId))
    }
    , [fetchIssueById, postId])

    return (
        <div>
            <HeaderPost issue={issue} />
            <Container>
                <ReactMarkdown>
                    {issue.body}
                </ReactMarkdown>
            </Container>
        </div>
    );
}