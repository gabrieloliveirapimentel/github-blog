
import { useTheme } from "styled-components";
import { IHeaderProfile } from "../../@types/types";
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from "react-icons/fa6";
import { 
    Container, 
    Content, 
    Name, 
    Description, 
    Links, 
    Link, 
    Item 
} from "./styles";

import profileImg from '../../assets/logo.svg'

export function HeaderProfile({ profile }: IHeaderProfile) {
    const theme = useTheme();
    
    return (
        <Container>
            <img src={profileImg} alt="Profile" />
            <Content>
                <Item>
                    <Name>
                        <h2>{profile.name}</h2>
                        <a>
                            <span>Github</span>
                            <FaArrowUpRightFromSquare fontSize={12} />
                        </a>
                    </Name>
                    <Description>{profile.description}</Description>
                </Item>
                <Item>
                    <Links>
                        <Link>
                            <FaGithub fontSize={16} color={theme['base-label']} />
                            <span>gabrieloliveirapimentel</span>
                        </Link>
                        <Link>
                            <FaBuilding fontSize={16} color={theme['base-label']} />
                            <span>Rocketseat</span>
                        </Link>
                        <Link>
                            <FaUserGroup fontSize={16} color={theme['base-label']} />
                            <span>32 Seguidores</span>
                        </Link>
                    </Links>
                </Item>
            </Content>
        </Container>
    )
}