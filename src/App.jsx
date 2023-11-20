import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Pages
import HomePage from './pages/User/HomePage'
import LoginPage from './pages/User/LoginPage'
import RegisterPage from './pages/User/RegisterPage'
import Shop from './pages/User/Shop'

//page admin
import MasterUser from './pages/Admin/MasterUser'
import MasterBarang from './pages/Admin/MasterBarang'
import Promo from './pages/Admin/AddPromo'
import Report from './pages/Admin/Report'
import ChatAdmin from './pages/Admin/Chat'
import Confirmation from './pages/Admin/Confirmation'
import LihatBarang from './pages/User/LihatBarang'
import Dashboard from './pages/Admin/Dashboard'



function App() {
  // Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/shop' element={<Shop/> }/>
        <Route path='/barang' element={<LihatBarang/>}/>

        <Route path='/admin/masteruser' element={<MasterUser/> }/>
        <Route path='/admin/masterbarang' element={<MasterBarang/> }/>
        <Route path='/admin/report' element={<Report/> }/>
        <Route path='/admin/confirmation' element={<Confirmation/> }/>
        <Route path='/admin/chat' element={<ChatAdmin/> }/>
        <Route path='/admin/promo' element={<Promo/> }/>
        <Route path='/admin/' element={<Dashboard/> }/>
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
