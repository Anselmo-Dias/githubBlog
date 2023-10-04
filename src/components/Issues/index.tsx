import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { dataIssuesProps, ReposContext } from '../../context/ReposContext'
import { Card, Content, IssuesContainer, Wrapper } from './styles'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

export function Issues() {
  const { dataIssues } = useContext(ReposContext)

  return (
    <IssuesContainer>
      <Wrapper>
        <Content>
          {dataIssues.map((itens: dataIssuesProps) => {
            return (
              <Card key={itens.id}>
                <div>
                  <h1>{itens.title}</h1>
                  <span>{moment(itens.created_at).format('L')}</span>
                </div>
                <p>
                  <NavLink to={`/issues/${itens.number}`}>
                    <ReactMarkdown rawSourcePos>{itens.body}</ReactMarkdown>
                  </NavLink>
                </p>
              </Card>
            )
          })}
        </Content>
      </Wrapper>
    </IssuesContainer>
  )
}
