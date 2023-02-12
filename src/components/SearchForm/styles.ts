import styled from 'styled-components'

export const SearchFormContainer = styled.div``
export const Wrapper = styled.div`
  width: min(107rem, 100%);
  margin-inline: auto;
  padding-inline: 1rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.2rem;
    /* padding-inline: 1rem; */

    strong {
      color: #fff;
      font-size: 1.8rem;
    }

    span {
      color: #7b96b2;
      font-size: 1.4rem;
    }
  }
`
export const Content = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 4.8rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid #1c2f41;
    background: #040f1a;
    color: #3a536b;
    padding: 1rem;
    &::placeholder {
      color: #3a536b;
    }
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid #3a536b;
    color: #3a536b;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`
