// import axios from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import {
  AdditionalInformation,
  Biography,
  Content,
  HomeContainer,
  InforsBiography,
  LinkGitHub,
  Wrapper,
} from './styles'

import gitHubImg from '../../assets/logoGitHub.svg'
import buildingImg from '../../assets/building.svg'
import peopleImg from '../../assets/people.svg'
import sendImg from '../../assets/send.svg'
import { Issues } from '../../components/Issues'
import { SearchForm } from '../../components/SearchForm'

interface ReposProps {
  name: string
  login: string
  bio: string
  avatar_url: string
  html_url: string
  followers: number
}

export function Home() {
  const [repos, setRepos] = useState<ReposProps>()

  async function fetchRepos() {
    const response = await api.get('/Anselmo-Dias')

    setRepos(response.data)
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  return (
    <HomeContainer>
      <Wrapper>
        <Content>
          <Biography>
            <img src={repos?.avatar_url} alt="Foto do usuario Anselmo Dias" />
            <InforsBiography>
              <h1>{repos?.login}</h1>
              <p>{repos?.bio}</p>
              <AdditionalInformation>
                <div>
                  <img src={gitHubImg} alt="" /> {repos?.name}
                </div>
                <div>
                  <img src={buildingImg} alt="" /> Diasconnection
                </div>
                <div>
                  <img src={peopleImg} alt="" /> {repos?.followers} seguidores
                </div>
              </AdditionalInformation>
            </InforsBiography>
            <LinkGitHub>
              <a href={repos?.html_url}>GITHUB</a>
              <img src={sendImg} alt="" />
            </LinkGitHub>
          </Biography>
        </Content>
        <SearchForm />
        <Issues />
      </Wrapper>
    </HomeContainer>
  )
}
