
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import LoginPage from './components/Login'
import ProtectRoute from './components/protectedroute'
import Browse from './components/Browse'
import SearchPage from './components/SearchPage'
import SignUpPage from './components/SignUp'
const router = createBrowserRouter([
  {
    path:"/Login",
    element:<LoginPage/>
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/search",
    element:<SearchPage/>
  },
  {
    path:"/signup",
    element:<SignUpPage/>
  },
])
function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
