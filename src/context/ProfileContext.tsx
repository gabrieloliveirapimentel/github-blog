import { useCallback, useEffect, useState } from "react";
import { IIssue, IProfile } from "../@types/types";
import { IProfileProviderProps, ProfileContext } from "./types";
import { GetIssueById, GetIssues, GetIssuesByUser, GetUser } from "../api/fetch";

export function ProfileProvider({ children}: IProfileProviderProps) {
    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    const [issues, setIssues] = useState<IIssue[]>([])
    const [issue, setIssue] = useState<IIssue>({} as IIssue)

    const fetchProfile = useCallback(async () => {
        try {
            const response = await GetUser() 
            setProfile(response.data)
        } catch (error) {
            console.error('Failed to fetch profile:', error)
        }
    }, [])

    const fetchIssuesByUser = async () => {
        try {
            const response = await GetIssuesByUser()
            setIssues(response.data.items)
        } catch (error) {
            console.error('Failed to fetch issues by user:', error)
        }
    }

    const fetchIssues = async (query?: string) => {
        try {
            const response = await GetIssues(query)
            setIssues(response.data.items)
        } catch (error) {
            console.error('Failed to fetch issues:', error)
        }
    }

    const fetchIssueById = useCallback( async (idIssue: number) => {
        try {
            const response = await GetIssueById(idIssue)
            setIssue(response.data)
        } catch (error) {
            console.error('Failed to fetch issue by id:', error)
        }
    }
    ,[])

    useEffect(() => {
        fetchProfile()
    },[fetchProfile])

    useEffect(() => {
        fetchIssuesByUser()
    }, [])

    return (
        <ProfileContext.Provider value={{profile, issues, issue, fetchIssues, fetchIssueById}}>
            {children}
        </ProfileContext.Provider>
    )
}