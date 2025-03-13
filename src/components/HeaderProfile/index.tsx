
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

export function HeaderProfile({profile} : IHeaderProfile) {
    const theme = useTheme();

    console.log('profile', profile)
    
    return (
        <Container>
            <img src={profile.avatar_url} alt="Profile" />
            <Content>
                <Item>
                    <Name>
                        <h2>{profile.name}</h2>
                        <a href={profile.html_url ? profile.html_url : ''} target="_blank">
                            <span>Github</span>
                            <FaArrowUpRightFromSquare fontSize={12} />
                        </a>
                    </Name>
                    <Description>{profile.bio}</Description>
                </Item>
                <Item>
                    <Links>
                        <Link>
                            <FaGithub fontSize={16} color={theme['base-label']} />
                            <span>{profile.login}</span>
                        </Link>
                        <Link>
                            <FaBuilding fontSize={16} color={theme['base-label']} />
                            <span>Rocketseat</span>
                        </Link>
                        <Link>
                            <FaUserGroup fontSize={16} color={theme['base-label']} />
                            <span>{profile.followers > 1 ? profile.followers + ' Seguidores' : profile.followers + ' Seguidor'}</span>
                        </Link>
                    </Links>
                </Item>
            </Content>
        </Container>
    )
}