import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/customeHooks/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
const Header = ({ darkMode, toggleDarkMode }) => {
  const [btnName, setBtnName] = useState("Login");
  // const [darkMode, setDarkMode] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items", cartItems);

  // Function to toggle dark mode
  // const toggleDarkMode = () => {
  //   // Toggle dark mode state
  //   setDarkMode(!darkMode);
  // };

  // Apply dark mode class to HTML element based on state
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);


//   useEffect(()=>{
// let savedMode = localStorage.getItem("displayMode")
// if(!savedMode){
//   savedMode = 'light'
//   setDarkMode(false)
//   localStorage.setItem("displayMode",savedMode)
// }
// setDarkMode(savedMode==="dark" ?true :false)
//   },[])


  //  console.log("dark mode",darkMode)
  return (
<div className="flex justify-between shadow-lg bg-slate-400 dark:bg-[#222222] dark:shadow-lg dark:shadow-slate-50">

      <div className="logo-container">
        <Link to="/home">
          {" "}
          <img className="m-2  w-20 rounded-full" src={LOGO_URL} />{" "}
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4 m-4 dark:text-white">
            <Link to="/home">Home </Link>
          </li>
          <li className="px-4 m-4  dark:text-white">
            <Link to="/home/about">About Us</Link>
          </li>
          <li className="px-4 m-4 dark:text-white">
            <Link to="/home/contact">Contact Us</Link>
          </li>
          <li className="px-4 m-4  dark:text-white">
            <Link to="/home/game">Game</Link>
          </li>
          <li className="px-4 m-4 font-bold text-xl  dark:text-white">
            {" "}
            <Link to="/home/cart">Cart- ({cartItems.length} items) </Link>
          </li>
        

{/* <button   className={`px-1 py-1 rounded-md bg-black text-white shadow-md dark:bg-white dark:text-black`} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode' }
      </button> */}
    
    <div><label className="relative inline-flex items-center mt-4 mx-2 cursor-pointer">
  <input className="sr-only peer" value="" type="checkbox" onClick={toggleDarkMode} />
  <div
    className="w-16 h-8 rounded-full ring-0 peer duration-500 outline-none bg-[#1d1d1d] overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['🌤️'] before:absolute before:h-8 before:w-8 before:top-1/2 before:bg-gray-100 before:rounded-full before:left-[1px] before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-300 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌙'] after:absolute after:bg-white after:rounded-full after:top-0 after:right-0 after:translate-y-full after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked: peer-checked:after:translate-y-0"
  ></div>
</label>
</div>
          {/* <button
            className={`px-2 py-2 rounded-md bg-black text-white shadow-md dark:bg-white dark:text-black dark:shadow-md`}
            onClick={toggleDarkMode}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </button> */}

          {/* Example element styled differently in light and dark mode */}
          <button
            className={
              btnName === "Login" ? "login-btn  dark:text-white" : "login-btn-danger px-4 m-4  dark:text-white"
            }
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
            {loggedInUser}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
