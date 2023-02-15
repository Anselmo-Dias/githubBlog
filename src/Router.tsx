import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefautLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/issues/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}
