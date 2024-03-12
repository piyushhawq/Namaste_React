import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/customeHooks/useOnlineStatus";
import UserContext from "./utils/UserContext";
const Header = ()=>{


const [btnName,setBtnName] = useState("Login");
const [darkMode, setDarkMode] = useState(false);
const {loggedInUser}= useContext(UserContext);


// Function to toggle dark mode
const toggleDarkMode = () => {
  // Toggle dark mode state
  setDarkMode(!darkMode);
};

// Apply dark mode class to HTML element based on state
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

//  console.log("dark mode",darkMode)
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
                {/* <button
        className={`px-2 py-2 rounded-md bg-black text-white shadow-md dark:bg-white `}
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}

<button
  className={`px-2 py-2 rounded-md bg-black text-white shadow-md dark:bg-white dark:text-black dark:shadow-md`}
  onClick={toggleDarkMode}
>
  {darkMode ? 'Dark Mode' : 'Light Mode'}
</button>


    

      {/* Example element styled differently in light and dark mode */}
                <button  className= {btnName === "Login"? "login-btn":"login-btn-danger px-4 m-4"} onClick={()=>{
                    btnName === "Login"?  
                    setBtnName("Logout")
                    : setBtnName("Login");
                }}>{btnName}{loggedInUser}</button>
               
               </ul>
            </div>
        </div>
    )
} 

export default Header;