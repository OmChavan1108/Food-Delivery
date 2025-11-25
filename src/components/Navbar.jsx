import { useState } from "react";
import logo from "../assets/logo.png";
import './Navbar.css'
import { Link } from "react-router-dom";

export default  function Navbar() {
   let [btn,setbtn]=useState("Login")
  
   function log(){
      if(btn=="Login"){
        setbtn("Logout")
      } else{
        setbtn("Login")
      }
   }

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo" className='appimg'/>
      </div>

      <div className="nav-items">
       <ul>
         <li><Link to={"/"} >Home</Link></li>
         <li><Link to={"/about"}>About us</Link> </li>
         <li className="cart"> <i className="fa-solid fa-cart-arrow-down"></i> </li>
         <button className="login" onClick={log}>{btn}</button>
       </ul> 
       
     </div>
    </div>
  );
}

