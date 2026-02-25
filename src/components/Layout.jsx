import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import {Provider}  from 'react-redux'
import  appStore  from '../utils/appStore'
export default function Layout(){
    return(
        <Provider store={appStore}>
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
        </Provider>

    )
}