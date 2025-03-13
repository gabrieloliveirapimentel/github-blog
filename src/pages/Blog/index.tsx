import { Card } from "../../components/Card";
import { HeaderProfile } from "../../components/HeaderProfile";
import { SearchForm } from "./components/SearchForm";

import { 
    Container, 
    Content, 
    List 
} from "./styles";

export function Blog() {
    const profile = {
        name: 'Gabriel Oliveira Pimentel',
        description: 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam',
    }

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