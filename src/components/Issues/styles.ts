import styled from 'styled-components'

export const IssuesContainer = styled.div``
export const Wrapper = styled.div`
  width: min(107rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
`
export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  padding: 3.2rem;
  gap: 2rem;

  background: #112131;
  border-radius: 10px;

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  h1 {
    color: #fff;
  }

  p {
    color: #afc2d4;
  }

  span {
    width: 9rem;
    font-size: 1.6rem;
    color: #afc2d4;
  }
`
