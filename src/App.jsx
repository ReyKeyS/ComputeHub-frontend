import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Pages
import HomePage from './pages/user/HomePage'
import LoginPage from './pages/user/LoginPage'
import RegisterPage from './pages/user/RegisterPage'
import Shop from './pages/user/Shop'

//page admin
import MasterUser from './pages/admin/MasterUser'
import LihatBarang from './pages/user/LihatBarang'


function App() {
  // Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/shop' element={<Shop/> }/>
        <Route path='/masteruser' element={<MasterUser/> }/>
        <Route path='/barang' element={<LihatBarang/>}/>
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
