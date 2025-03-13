import { useCallback, useEffect, useState } from "react";
import { IIssue, IProfile } from "../@types/types";
import { IProfileProviderProps, ProfileContext } from "./types";
import { api } from "../lib/axios";

export function ProfileProvider({ children}: IProfileProviderProps) {
    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    const [issues, setIssues] = useState<IIssue[]>([])
    const [issuesCount, setIssuesCount] = useState(0)

    const fetchProfile = useCallback(async () => {
        const response = await api.get('users/gabrieloliveirapimentel')
        
        setProfile(response.data)
    }, [])

    const fetchIssuesByUser = async () => {
        const response = await api.get('search/issues?q=user:gabrieloliveirapimentel')
        
        setIssuesCount(response.data.total_count)
        setIssues(response.data.items)
    }

    const fetchIssues = async (query?: string) => {
        const response = await api.get(`search/issues?q=${query} repo:gabrieloliveirapimentel/github-blog`)
        
        setIssuesCount(response.data.total_count)
        setIssues(state => [...state, ...response.data.items])
    }

    useEffect(() => {
        fetchProfile()
    },[fetchProfile])

    useEffect(() => {
        fetchIssuesByUser()
    }, [])

    return (
        <ProfileContext.Provider value={{profile, issues, issuesCount, fetchIssues}}>
            {children}
        </ProfileContext.Provider>
    )
}