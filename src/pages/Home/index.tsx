// import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
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
import { ReposContext } from '../../context/ReposContext'
import { Navigate } from 'react-router-dom'

export function Home() {
  const [sucess, setSucess] = useState(true)
  const { inforUser } = useContext(ReposContext)

  useEffect(() => {
    if (!inforUser) {
      setSucess(false)
    }
  }, [])

  return (
    <HomeContainer>
      {!sucess && <Navigate to="/" />}
      <Wrapper>
        <Content>
          <Biography>
            <img src={inforUser?.avatar_url} alt="Foto do usuario" />
            <InforsBiography>
              <h1>{inforUser?.login}</h1>
              <p>{inforUser?.bio}</p>
              <AdditionalInformation>
                <div>
                  <img src={gitHubImg} alt="" /> {inforUser?.name}
                </div>
                <div>
                  <img src={buildingImg} alt="" />{' '}
                  {inforUser?.company ? inforUser?.company : 'diasconnection'}
                </div>
                <div>
                  <img src={peopleImg} alt="" /> {inforUser?.followers}{' '}
                  seguidores
                </div>
              </AdditionalInformation>
            </InforsBiography>
            <LinkGitHub>
              <a target="_blank" href={inforUser?.html_url} rel="noreferrer">
                GITHUB
              </a>
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
