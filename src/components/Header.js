import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/customeHooks/useOnlineStatus";
const Header = ()=>{

const [btnName,setBtnName] = useState("Login");
const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between shadow-lg mb-2" >
            <div className="logo-container">
            <Link to= "/home">  <img className="m-2  w-20 rounded-full" src={LOGO_URL}/> </Link>
            </div>
            <div className="flex items-center">
               <ul className="flex">
                 <li className="px-4 m-4"><Link to= "/home">Home </Link></li> 
                <li className="px-4 m-4"><Link to= "/home/about">About Us</Link></li>
                 <li className="px-4 m-4"><Link to= "/home/contact">Contact Us</Link></li>
                 <li className="px-4 m-4"><Link to= "/home/game">Game</Link></li>
                <li className="px-4 m-4">Cart</li>
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