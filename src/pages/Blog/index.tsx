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
    const { profile, issues} = useContext(ProfileContext)

    return (
        <div>
            <HeaderProfile profile={profile}/>
            <Container>
                <Content>
                    <h2>Publicações</h2>
                    <span>{issues.length > 1 ? issues.length + ' publicações' : issues.length +' publicação'} </span>
                </Content>
                <SearchForm />
                <List>
                    {issues.length > 0 ? 
                        issues.map(issue => (
                            <Card issue={issue} key={issue.number} />
                        )) : 
                        <span>Nenhuma publicação encontrada</span>
                    }
                </List>
            </Container>
        </div>
    )
}