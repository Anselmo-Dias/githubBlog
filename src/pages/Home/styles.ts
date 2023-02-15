import styled from 'styled-components'

export const HomeContainer = styled.section``

export const Wrapper = styled.div`
  width: min(107rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem;
`
export const Content = styled.div``

export const Biography = styled.div`
  background: #0b1b2b;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 3.2rem 3.2rem 3.1rem 4rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 3.2rem;

  color: #fff;

  transform: translateY(-13rem);

  & > img {
    width: 14.8rem;
    height: 14.8rem;

    border-radius: 8px;
  }
`

// export const Divider = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   width: 100%;

//   & > img {
//     width: 14.8rem;
//     height: 14.8rem;

//     border-radius: 8px;
//   }
// `

export const LinkGitHub = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: flex-end;

  width: 35%;

  a {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 160%;

    text-transform: uppercase;

    color: #3294f8;
  }

  img {
    width: 1.2rem;
  }
`

export const InforsBiography = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;

    margin-bottom: 1rem;
  }
`
export const AdditionalInformation = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 2.4rem;
  margin-top: 2.4rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.8rem;
  }
`
