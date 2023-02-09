import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyles } from './styles/Global'

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  )
}
