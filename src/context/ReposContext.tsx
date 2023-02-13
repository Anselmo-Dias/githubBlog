import axios from 'axios'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface ReposProviderProps {
  children: ReactNode
}

interface dataIssuesProps {
  title: string
  body: string
  number: number
}

// interface IssuesItemsProps {
//   title: string
//   body: string
// }

interface ReposContextProps {
  // searchIssues: IssuesItemsProps[]
  dataIssues: dataIssuesProps[]
  fetchIssues: (query: string) => Promise<void>
}

export const ReposContext = createContext({} as ReposContextProps)

export function ReposProvider({ children }: ReposProviderProps) {
  const [dataIssues, setDataIssues] = useState<dataIssuesProps[]>([])
  // const [searchIssues, setSearchIssues] = useState<IssuesItemsProps[]>([])

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/Anselmo-Dias/githubBlog/issues')
      .then((response) => {
        setDataIssues(response.data)
      })
  }, [])

  async function fetchIssues(query: string) {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=${query}%20repo:${'Anselmo-Dias'}/${'githubBlog'}`,
    )

    setDataIssues(response.data.items)
  }

  return (
    <ReposContext.Provider value={{ dataIssues, fetchIssues }}>
      {children}
    </ReposContext.Provider>
  )
}
