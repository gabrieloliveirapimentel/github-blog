import { useEffect, useState } from "react";
import { IIssue, IProfile } from "../@types/types";
import { IProfileProviderProps, ProfileContext } from "./types";
import { api } from "../lib/axios";

export function ProfileProvider({ children}: IProfileProviderProps) {
    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    const [issues, setIssues] = useState<IIssue[]>([])

    const fetchProfile = async () => {
        const response = await api.get('users/gabrieloliveirapimentel')
        
        setProfile(response.data)
    }

    const fetchIssues = async (query?: string) => {
        const response = await api.get(`search/issues?q=${query} repo:gabrieloliveirapimentel/github-blog`)
        
        console.log(response)
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
        <ProfileContext.Provider value={{profile, issues, fetchProfile, fetchIssues}}>
            {children}
        </ProfileContext.Provider>
    )
}