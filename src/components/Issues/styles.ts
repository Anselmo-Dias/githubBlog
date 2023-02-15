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
  padding-bottom: 5rem;
`
export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  height: 35rem;

  padding: 5.2rem;
  gap: 2rem;

  background: #112131;
  border-radius: 10px;
  white-space: wrap;
  overflow: hidden;
  text-align: letf;

  & > div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  h1 {
    color: #fff;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }

  a {
    color: #afc2d4;
  }

  span {
    /* width: 9rem; */
    color: #afc2d4;
  }
`
