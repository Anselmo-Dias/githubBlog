import axios from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Content, HomeContainer, Wrapper } from './styles'

export function Home() {
  const [repos, setRepos] = useState()

  useEffect(() => {
    fetch('/Anselmo-Dias')
      .then((response) => response.json())
      .then((data) => {
        setRepos(data)
      })
  }, [])

  console.log(repos)

  return (
    <HomeContainer>
      <Wrapper>
        <Content></Content>
      </Wrapper>
    </HomeContainer>
  )
}
