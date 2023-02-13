import { BrowserRouter } from 'react-router-dom'
import { ReposProvider } from './context/ReposContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/Global'

export function App() {
  return (
    <ReposProvider>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </ReposProvider>
  )
}
