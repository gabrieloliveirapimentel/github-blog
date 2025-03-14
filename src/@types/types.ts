export interface IHeaderProfile {
    profile: {
        name: string
        bio?: string
        login: string
        avatar_url: string
        html_url: string
        followers?: number
    }
}

export interface IHeaderPost {
    title: string
    author: string
    date: string
    comments: number
}

export interface ICardProps {
    issue: {
        title: string;
        created_at: string;
        body: string;
        html_url: string;
        number: number;
    }
}

export interface IProfile {
    login: string;
    id?: number;
    node_id?: string;
    avatar_url: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    name: string;
    company?: string;
    location?: string;
    bio?: string;
    followers?: number;
    following?: number;
}

export interface IIssueById {
    issue: IIssue;
}

export interface IIssue {
    url: string;
    created_at: string;
    repository_url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    number: number;
    title: string;
    user: IProfile;
    comments: number;
    body: string;
}

export interface IProfileContextType {
    profile: IProfile;
    issues: IIssue[];
    issue: IIssue;
    fetchIssues: (query?: string) => Promise<void>;
    fetchIssueById: (idIssue: number) => Promise<void>;
}


