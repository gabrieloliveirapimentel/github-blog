import { useContext } from "react"
import { ProfileContext } from "../../../../context/types"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

import { Container } from "./styles"
import { useForm } from "react-hook-form"

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchIssues } = useContext(ProfileContext)

    const {
        register,
        handleSubmit
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchIssues(data: SearchFormInputs) {
        await fetchIssues(data.query)
    }

    return (
        <Container onSubmit={handleSubmit(handleSearchIssues)}>
            <input 
                type="text" 
                placeholder="Buscar conteúdo" 
                {...register('query')}
            />
        </Container>
    )
}