import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [btn, setBtn] = useState("Login");

  function handleLogin() {
    setBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
  }

  const online = useOnline();

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="w-20" />
      </div>

      {/* Menu Items */}
      <ul className="flex items-center gap-6 text-lg font-semibold">
        <li>{online ? "🟢 Online" : "🔴 Offline"}</li>
        <li><Link to="/" className="hover:text-blue-500">Home</Link> </li>
        <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
        <li className="cursor-pointer text-xl"><i className="fa-solid fa-cart-arrow-down"></i></li>
        <button onClick={handleLogin}
         className="px-4 py-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-lg shadow-cyan-500/50" >{btn}
        </button>
      </ul>
    </nav>
  );
}
