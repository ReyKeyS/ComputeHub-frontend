import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import Error from "./pages/User/Error";
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
import AdminNavbar from './pages/Admin/AdminNavbar'



function App() {
  // Router
  const router = createBrowserRouter(
    [
      {
        path: "/", 
        errorElement: <Error />,
        children: [
          {
            index:true,
            element: <HomePage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register", 
            element: <RegisterPage/>,
          },
          {
            path: "/shop", 
            element: <Shop/>,
          },
          {
            path: "/barang", 
            element: <LihatBarang/>,
          },
          {
            path: "/admin",
            element: <AdminNavbar />,
            // loader: ,  
            children: [
              {
                index:true,
                element: <Dashboard />,
              },
              {
                path: "masteruser",
                // action: ,
                element:<MasterUser/> ,
              },
              {
                path: "masterbarang",
                // loader: getCatalog,
                element: <MasterBarang />,
              },
              {
                path: "report",
                // loader: getCatalog,
                // action: formCatalogAction,
                element: <Report />,
              },
              {
                path: "confirmation",
                element: <Confirmation/>,
              },
              {
                path: "chat",
                element: <ChatAdmin/>,
              },
              {
                path: "promo",
                element: <Promo/>,
              },
            ],
          },
        ],
      },
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
