import {
  AdditionalInformation,
  Content,
  ContentMainContainer,
  Paragraphs,
  PostContainer,
  Wrapper,
} from './styles'

import send from '../../assets/send.svg'
import { ArrowBendDownLeft } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import logoGitHubImg from '../../assets/logoGitHub.svg'
import calendatyImg from '../../assets/calendary.svg'
import messages from '../../assets/messages.svg'
import moment from 'moment'
import { ReposContext } from '../../context/ReposContext'
import { apiRepos } from '../../lib/axios'

interface PostDataProps {
  title: string
  body: string
  created_at: string
  comments: number
  user: {
    login: string
  }
  html_url: string
}

export function Post() {
  const [postData, setPostData] = useState<PostDataProps>()
  const { profile } = useContext(ReposContext)
  const { postId } = useParams()

  useEffect(() => {
    async function fetchIssuesSpecifc() {
      const response = await apiRepos.get(
        `/${profile?.nameUser}/${profile?.nameRepositorio}/issues/${postId}`,
      )

      setPostData(response.data)
      console.log(response.data)
    }
    fetchIssuesSpecifc()
  }, [])

  return (
    <PostContainer>
      <Wrapper>
        <ContentMainContainer>
          <Content>
            <div>
              <NavLink to="/home">
                {' '}
                <ArrowBendDownLeft /> VOLTAR
              </NavLink>
              <Link target={'_blank'} to={`${postData?.html_url}`}>
                VER NO GITHUB <img src={send} alt="" />
              </Link>
            </div>
            <strong>{postData?.title}</strong>
            <AdditionalInformation>
              <p>
                <img src={logoGitHubImg} alt="" />
                {postData?.user.login}
              </p>
              <p>
                <img src={calendatyImg} alt="" />
                {moment(postData?.created_at).format('L')}
              </p>
              <p>
                <img src={messages} alt="" />
                {postData?.comments} comentários
              </p>
            </AdditionalInformation>
          </Content>
        </ContentMainContainer>
        <Paragraphs>
          <p>
            <ReactMarkdown
              rawSourcePos
              includeElementIndex
              remarkPlugins={[remarkGfm]}
            >
              {postData?.body ? postData?.body : 'Carregando...'}
            </ReactMarkdown>
          </p>
        </Paragraphs>
      </Wrapper>
    </PostContainer>
  )
}
