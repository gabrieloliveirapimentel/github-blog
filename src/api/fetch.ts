import { api } from "../lib/axios"

const GetUser = async () => {
    const data = await api.get('users/gabrieloliveirapimentel')

    return data
}

const GetIssuesByUser = async () => {
    const data = await api.get('search/issues?q=user:gabrieloliveirapimentel')

    return data
}

const GetIssues = async (query?: string) => {
    const data = await api.get(`search/issues?q=${query} repo:gabrieloliveirapimentel/github-blog`)

    return data
}

const GetIssueById = async (id: number) => {
    const data = await api.get(`/repos/gabrieloliveirapimentel/github-blog/issues/${id}`)

    return data
}

export { GetUser, GetIssuesByUser, GetIssues, GetIssueById }