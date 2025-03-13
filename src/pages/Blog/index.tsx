import { useContext } from "react";
import { Card } from "../../components/Card";
import { HeaderProfile } from "../../components/HeaderProfile";
import { SearchForm } from "./components/SearchForm";

import { 
    Container, 
    Content, 
    List 
} from "./styles";
import { ProfileContext } from "../../context/types";

export function Blog() {
    const { profile } = useContext(ProfileContext)
    
    console.log(profile)

    return (
        <div>
            <HeaderProfile profile={profile}/>
            <Container>
                <Content>
                    <h2>Publicações</h2>
                    <span>6 publicações</span>
                </Content>
                <SearchForm />
                <List>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </List>
            </Container>
        </div>
    )
}