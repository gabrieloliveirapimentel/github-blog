import { formatDistanceToNow } from "date-fns";
import { ICardProps } from "../../@types/types";
import { Container, Description, Heading } from "./styles";
import { ptBR } from "date-fns/locale";

export function Card({ issue }: ICardProps) {
    return (
        <Container>
            <Heading>
                <h3>{issue.title}</h3>
                <span>
                    {formatDistanceToNow(
                        new Date(issue.created_at), {
                        addSuffix: true,
                        locale: ptBR
                    })}
                </span>
            </Heading>
            <Description>
                {issue.body}
            </Description>


        </Container>
    )
}