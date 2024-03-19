import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link,useNavigate } from "react-router-dom";
import useOnlineStatus from "./utils/customeHooks/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import { useAuth } from "./utils/customeHooks/authContext";
import { doSignOut } from "./firebase/auth";
import { FaBars, FaAngleDown } from 'react-icons/fa'
import { FaXmark } from "react-icons/fa6";


const Header = ({ darkMode, toggleDarkMode }) => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items", cartItems);

  
  const navigate = useNavigate()
 const userData = useAuth()
  const { userLoggedIn } = useAuth()
  console.log("userLoggedIn",userLoggedIn);

  console.log("userData",userData);
 
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuOpen(true); // Open menu if window width is greater than 1024
    } else {
      setMenuOpen(false); // Close menu if window width is 1024 or less
    }
  };
  
  useEffect(() => {
    // Initialize menu state and add resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
<div className="flex justify-between shadow-lg bg-slate-400 dark:bg-[#222222] dark:shadow-lg dark:shadow-slate-50   overflow-hidden">

      <div className="logo-container">
        <Link to="/home">
          {" "}
          <img className="m-2  w-20 rounded-full" src={LOGO_URL} />{" "}
        </Link>
      </div>
      <div className="flex items-center">
      <button className="lg:hidden text-black focus:outline-none ml-4 mr-5" onClick={() => setMenuOpen(prev => !prev)}>
    {isMenuOpen ? <FaXmark className='w-8 h-8' /> : <FaBars className='w-8 h-8' />} </button>
      
      <ul className={`fixed lg:flex lg:static m-8 mr-0 p-4 right-0 top-8  xs:top-16 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out`}>

        {/* <ul className="flex"> */}
          <li className="px-4 m-4 dark:text-black">
            <Link to="/home">Home </Link>
          </li>
          <li className="px-4 m-4  dark:text-black">
            <Link to="/home/about">About Us</Link>
          </li>
          <li className="px-4 m-4 dark:text-black">
            <Link to="/home/contact">Contact Us</Link>
          </li>
          <li className="px-4 m-4  dark:text-black">
            <Link to="/home/game">Game</Link>
          </li>
          <li className="px-4 m-4 font-bold text-xl  dark:text-black">
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


<li className="px-4 m-4 font-bold text-xl  dark:text-white">
          {
                userLoggedIn
                    ?
                    <>

                        <button onClick={() => { doSignOut().then(() => { navigate('/home') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='px-2 m-1 font-bold text-xl  dark:text-white underline' to={'/home/login'}>Login</Link>
                        {/* <Link className='px-2 m-1 font-bold text-xl  dark:text-white underline' to={'/home/register'}>Register</Link> */}
                    </>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
