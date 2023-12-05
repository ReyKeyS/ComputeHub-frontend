import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Error from "../pages/User/Error";
// Pages
import HomePage from '../pages/User/HomePage'
import LoginPage from '../pages/User/LoginPage'
import RegisterPage from '../pages/User/RegisterPage'
import Shop from '../pages/User/Shop'
import History from '../pages/User/History'

// Admin Pages
import MasterUser from '../pages/Admin/MasterUser'
// import MasterItem from '../pages/Admin/MasterItem'
import MasterItem from '../pages/Admin/MasterItem'
import Promo from '../pages/Admin/AddPromo'
import Report from '../pages/Admin/Report'
import ChatAdmin from '../pages/Admin/ChatAdmin'
import Confirmation from '../pages/Admin/Confirmation'
import LihatBarang from '../pages/User/LihatBarang'
import Dashboard from '../pages/Admin/Dashboard'
import AdminNavbar from '../pages/Admin/AdminNavbar'
import ChatUser from '../pages/User/ChatUser'
import Cart from '../pages/User/Cart';
import TransSuccess from '../pages/User/TransSuccess';
import Profile from '../pages/user/Profile';
import ProfileDashboard from '../pages/user/ProfileDashboard';
import ProfileEdit from '../pages/user/ProfileEdit';

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
          path: "/chat",
          element: <ChatUser />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/shop", 
          element: <Shop/>,
        },
        {
          path: "/success",
          element: <TransSuccess/>,
        },
        {
          path: "/barang/:id", 
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
              path: "masteritem",
              // loader: getCatalog,
              element: <MasterItem />,
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
        {
          path:"/profile",
          element:<Profile/>,
          children:[
            {
              index:true,
              path:"",
              element:<ProfileDashboard/>
            },
            {
              path:"edit",
              element:<ProfileEdit/>
            },
            {
              path:"history",
              element:<History/>
            }
          ]
        }
      ],
    },
  ]
)

export default router
