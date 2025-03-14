import { formatDistanceToNow } from "date-fns";
import { ICardProps } from "../../@types/types";
import { Container, Description, Heading } from "./styles";
import { ptBR } from "date-fns/locale";
import ReactMarkdown from "react-markdown";

export function Card({ issue }: ICardProps) {
    return (
        <Container>
            <Heading>
                <a href={`/posts/${issue.number}`}>{issue.title}</a>
                <span>
                    {formatDistanceToNow(
                        new Date(issue.created_at), {
                        addSuffix: true,
                        locale: ptBR
                    })}
                </span>
            </Heading>
            <Description>
                <ReactMarkdown>
                {issue.body}
                </ReactMarkdown>
            </Description>
        </Container>
    )
}