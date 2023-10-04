import axios from 'axios'
import { createContext, ReactNode, useState } from 'react'

interface ReposProviderProps {
  children: ReactNode
}

interface inforUserProps {
  name: string
  login: string
  bio: string
  avatar_url: string
  html_url: string
  followers: number
  company: string
}

export interface dataIssuesProps {
  id: number
  title: string
  body: string
  number: number
  created_at: string
}

interface formProfileProps {
  nameUser: string
  nameRepositorio: string
}

interface ReposContextProps {
  // searchIssues: IssuesItemsProps[]
  inforUser: inforUserProps | undefined
  profile: formProfileProps | undefined
  dataIssues: dataIssuesProps[]
  searchIssues: (query: string) => Promise<void>

  addingInformationInTheState: (
    dataIssues: dataIssuesProps[],
    dataFormProfile: formProfileProps,
    dataUsers: inforUserProps,
  ) => void
}

export const ReposContext = createContext({} as ReposContextProps)

export function ReposProvider({ children }: ReposProviderProps) {
  const [dataIssues, setDataIssues] = useState<dataIssuesProps[]>([])
  const [profile, setProfile] = useState<formProfileProps>()
  const [inforUser, setInforUser] = useState<inforUserProps>()

  function addingInformationInTheState(
    dataIssues: dataIssuesProps[],
    dataFormProfile: formProfileProps,
    dataUsers: inforUserProps,
  ) {
    setInforUser(dataUsers)
    setDataIssues(dataIssues)
    setProfile(dataFormProfile)
  }

  async function searchIssues(query: string) {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=${query}%20repo:${profile?.nameUser}/${profile?.nameRepositorio}`,
    )

    setDataIssues(response.data.items)
  }

  return (
    <ReposContext.Provider
      value={{
        inforUser,
        profile,
        dataIssues,
        searchIssues,
        addingInformationInTheState,
      }}
    >
      {children}
    </ReposContext.Provider>
  )
}
