import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "../components/Layout";
import Body from "../components/Body"
//mport About from "../components/About";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";
import { lazy, Suspense } from "react";

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
      }
    ],
    errorElement:<Error/>
  }
])

export const App=()=>{ 
 return <RouterProvider router={router}/>
}