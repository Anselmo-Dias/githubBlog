import styled from 'styled-components'

export const PostContainer = styled.section``
export const Wrapper = styled.div`
  width: min(107rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContentMainContainer = styled.div`
  width: min(863px, 100%);

  background: #0b1b2b;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 3.2rem;

  transform: translateY(-10rem);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & div:first-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 160%;

      text-transform: uppercase;

      color: #3294f8;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.8rem;
    }
  }

  strong {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;

    color: #e7edf4;

    margin-top: 2rem;
  }
`
export const AdditionalInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 3.2rem;

  margin-top: 0.8rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 0.8rem;
  }
`

export const Paragraphs = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 160%;

  color: #afc2d4;

  width: min(820px, 100%);
`
