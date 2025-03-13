
import { useTheme } from "styled-components";
import { FaChevronLeft, FaArrowUpRightFromSquare, FaCalendarDay, FaComment, FaGithub } from "react-icons/fa6";
import { 
    Container, 
    Heading,
    Title,
    Links, 
    Link, 
} from "./styles";


export function HeaderPost() {
    const theme = useTheme();
    
    return (
        <Container>
            <Heading>
                <a href='/'>
                    <FaChevronLeft fontSize={12} />
                    <span>Voltar</span>
                </a>
                <a>
                    <span>Ver no Github</span>
                    <FaArrowUpRightFromSquare fontSize={12} />
                </a>
            </Heading>
            <Title>JavaScript data types and data structures</Title>
            <Links>
                <Link>
                    <FaGithub fontSize={16} color={theme['base-label']} />
                    <span>gabrieloliveirapimentel</span>
                </Link>
                <Link>
                    <FaCalendarDay fontSize={16} color={theme['base-label']} />
                    <span>Há 1 dia</span>
                </Link>
                <Link>
                    <FaComment fontSize={16} color={theme['base-label']} />
                    <span>5 comentários</span>
                </Link>
            </Links>
        </Container>
    )
}