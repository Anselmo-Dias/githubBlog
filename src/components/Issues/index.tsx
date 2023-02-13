import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { ReposContext } from '../../context/ReposContext'
import { Card, Content, IssuesContainer, Wrapper } from './styles'

interface dataIssuesProps {
  title: string
  body: string
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
                <ReactMarkdown>{itens.body}</ReactMarkdown>
              </Card>
            )
          })}
        </Content>
      </Wrapper>
    </IssuesContainer>
  )
}
