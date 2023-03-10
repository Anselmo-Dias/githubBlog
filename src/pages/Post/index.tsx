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
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import logoGitHubImg from '../../assets/logoGitHub.svg'
import calendatyImg from '../../assets/calendary.svg'
import messages from '../../assets/messages.svg'
import moment from 'moment'

interface postDataProps {
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
  const { postId } = useParams()

  const [postData, setPostData] = useState<postDataProps>()

  useEffect(() => {
    async function fetchIssuesSpecifc() {
      const response = await axios.get(
        `https://api.github.com/repos/Anselmo-Dias/gitHubBlog/issues/${postId}`,
      )

      setPostData(response.data)
    }
    fetchIssuesSpecifc()
  }, [postId])

  return (
    <PostContainer>
      <Wrapper>
        <ContentMainContainer>
          <Content>
            <div>
              <a href="/">
                {' '}
                <ArrowBendDownLeft /> VOLTAR
              </a>
              <a href={postData?.html_url}>
                VER NO GITHUB <img src={send} alt="" />
              </a>
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
