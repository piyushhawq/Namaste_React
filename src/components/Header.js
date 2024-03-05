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
                 <li><Link to= "/home">Home </Link></li> 
                <li><Link to= "/home/about">About Us</Link></li>
                 <li><Link to= "/home/contact">Contact Us</Link></li>
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