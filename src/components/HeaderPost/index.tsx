
import { useTheme } from "styled-components";
import { FaChevronLeft, FaArrowUpRightFromSquare, FaCalendarDay, FaComment, FaGithub } from "react-icons/fa6";
import { 
    Container, 
    Heading,
    Title,
    Links, 
    Link, 
} from "./styles";
import { IIssueById } from "../../@types/types";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


export function HeaderPost({ issue }: IIssueById) {
    const theme = useTheme();

    return (
        <Container>
            <Heading>
                <a href='/'>
                    <FaChevronLeft fontSize={12} />
                    <span>Voltar</span>
                </a>
                <a href={issue.html_url} target='_blank'>
                    <span>Ver no Github</span>
                    <FaArrowUpRightFromSquare fontSize={12} />
                </a>
            </Heading>
            <Title>{issue.title}</Title>
            <Links>
                <Link>
                    <FaGithub fontSize={16} color={theme['base-label']} />
                    <span>{issue.user?.login}</span>
                </Link>
                <Link>
                    <FaCalendarDay fontSize={16} color={theme['base-label']} />
                    <span>
                        {issue.created_at &&
                        formatDistanceToNow(
                            new Date(issue.created_at), {
                            addSuffix: true,
                            locale: ptBR
                        })}
                    </span>
                </Link>
                <Link>
                    <FaComment fontSize={16} color={theme['base-label']} />
                    <span>{issue.comments + ' Comentários'}</span>
                </Link>
            </Links>
        </Container>
    )
}