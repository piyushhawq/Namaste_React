import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
const Header = ()=>{

const [btnName,setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
            <Link to= "/home">  <img className="logo" src={LOGO_URL}/> </Link>
            </div>
            <div className="nav-item">
               <ul>
                <Link to= "/home"> <li>Home</li> </Link>
                <Link to= "/home/about"><li>About Us</li></Link>
                <Link to= "/home/contact"> <li>Contact Us</li></Link>
                <li>Cart</li>
                <button  className= {btnName === "Login"? "login-btn":"login-btn-danger"} onClick={()=>{
                    btnName === "Login"?  
                    setBtnName("Logout")
                    : setBtnName("Login");
                }}>{btnName}</button>
               
               </ul>
            </div>
        </div>
    )
} 

export default Header;