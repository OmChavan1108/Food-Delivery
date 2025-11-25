import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "../components/Layout";
import Body from "../components/Body"
import About from "../components/About";
import Error from "../components/Error";

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"",
      element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ],
    errorElement:<Error/>
  }
])

export const App=()=>{ 
 return <RouterProvider router={router}/>
}