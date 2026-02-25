import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "../components/Layout";
import Body from "../components/Body"
//import About from "../components/About";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Cart from "../components/Cart";


let About = lazy(() => import("../components/About"));


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
        element:<Suspense fallback={<h1>Loading...</h1> } ><About/></Suspense>
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  }
])

export const App=()=>{ 
 return <RouterProvider router={router}/>
}