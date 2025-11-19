import logo from "./assets/logo.png";
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo" className='appimg'/>
      </div>

      <div className="nav-items">
       <ul>
         <li>Home</li>
         <li>About us</li>
         <li className="cart"> <i className="fa-solid fa-cart-arrow-down"></i> </li>
       </ul> 
     </div>
    </div>
  );
}
