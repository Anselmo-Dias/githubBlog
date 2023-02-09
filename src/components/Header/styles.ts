import styled from 'styled-components'
import backgroundImg from '../../assets/background.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  overflow-y: hidden;
`