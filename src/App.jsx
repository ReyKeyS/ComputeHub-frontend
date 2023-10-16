import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

function App() {
  // Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
