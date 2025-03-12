
import { ProfileContainer, ProfileDescriptionContainer, ProfileNameContainer, ProfileDescription, ProfileLinksContainer, ProfileLink, ProfileDescriptionItem  } from "./styles";
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from "react-icons/fa6";

import profileImg from '../../assets/logo.svg'
import { useTheme } from "styled-components";

export interface IHeaderProfile {
    profile: IProfile
}

export interface IProfile {
    name: string
    description: string
    links: ILink[]
}

export interface ILink {
    icon: string
    text: string
}

export function HeaderProfile({ profile }: IHeaderProfile) {
    const theme = useTheme();
    
    return (
        <ProfileContainer>
            <img src={profileImg} alt="Profile" />
            <ProfileDescriptionContainer>
                <ProfileDescriptionItem>
                    <ProfileNameContainer>
                        <h2>{profile.name}</h2>
                        <button>
                            <span>Github</span>
                            <FaArrowUpRightFromSquare fontSize={12} />
                        </button>
                    </ProfileNameContainer>
                    <ProfileDescription>{profile.description}</ProfileDescription>
                </ProfileDescriptionItem>
                <ProfileDescriptionItem>
                    <ProfileLinksContainer>
                            <ProfileLink>
                                <FaGithub fontSize={16} color={theme['base-label']} />
                                <span>gabrieloliveirapimentel</span>
                            </ProfileLink>
                            <ProfileLink>
                                <FaBuilding fontSize={16} color={theme['base-label']} />
                                <span>Rocketseat</span>
                            </ProfileLink>
                            <ProfileLink>
                                <FaUserGroup fontSize={16} color={theme['base-label']} />
                                <span>32 Seguidores</span>
                            </ProfileLink>

                    </ProfileLinksContainer>
                </ProfileDescriptionItem>
            </ProfileDescriptionContainer>
        </ProfileContainer>
    )
}