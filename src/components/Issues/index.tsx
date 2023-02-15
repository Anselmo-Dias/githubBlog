import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { ReposContext } from '../../context/ReposContext'
import { Card, Content, IssuesContainer, Wrapper } from './styles'

interface dataIssuesProps {
  title: string
  body: string
  number: number
}
export function Issues() {
  const { dataIssues } = useContext(ReposContext)

  return (
    <IssuesContainer>
      <Wrapper>
        <Content>
          {dataIssues.map((itens: dataIssuesProps) => {
            return (
              <Card key={itens.title}>
                <div>
                  <h1>{itens.title}</h1>
                  <span>Há 1 dia</span>
                </div>
                <p>
                  <a href={`/issues/${itens.number}`}>
                    <ReactMarkdown rawSourcePos>{itens.body}</ReactMarkdown>
                  </a>
                </p>
              </Card>
            )
          })}
        </Content>
      </Wrapper>
    </IssuesContainer>
  )
}
