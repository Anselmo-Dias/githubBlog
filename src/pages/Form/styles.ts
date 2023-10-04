import styled from 'styled-components'

export const GetDataUserContainer = styled.div``
export const Wrapper = styled.div`
  width: min(107rem, 100%);
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  strong {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 2rem;
  }

  transform: translateY(-11rem);

  width: min(70rem, 100%);
  background-color: #0b1b2b;
  padding: 4.2rem;
  border-radius: 1rem;
`
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;

  input {
    background-color: transparent;
    padding: 1.5rem 2rem;
    border: 0;
    border-bottom: 1px solid #fff;
    color: #fff;

    &::placeholder {
      color: #fff;
    }

    &:focus {
      outline: none;
    }
  }
`

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  button[type='submit'] {
    padding: 1.5rem 2rem;
    border-radius: 10px;
    font-size: 1.8rem;
  }

  button[type='submit']:disabled {
    cursor: not-allowed;
    opacity: 0.9;
  }
`
