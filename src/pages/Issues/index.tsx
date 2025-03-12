import { Header } from "../../components/Header";
import { HeaderProfile } from "../../components/HeaderProfile";
import { SearchForm } from "./components/SearchForm";
import { IssuesContainer } from "./styles";

export function Issues() {
    const profile = {
        name: 'Gabriel Oliveira Pimentel',
        description: 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam',
        links: [
            { icon: 'icon', text: 'gabrieloliveirapimentel' },
            { icon: 'icon', text: 'Rocketseat' },
            { icon: 'icon', text: '32 Seguidores' }
        ]
    }

    return (
        <div>
            <Header />
            <HeaderProfile profile={profile}/>
            <IssuesContainer>
            <div>
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </div>
            <SearchForm />
            </IssuesContainer>
        </div>
    )
}