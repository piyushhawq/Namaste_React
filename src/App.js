import React ,{useState,useEffect}from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Home from "./components/Home";
import RestaurantsMenu from "./components/RestaurantsMenu";
import useOnlineStatus from "./components/utils/customeHooks/useOnlineStatus";
import Game from "./components/Game";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import Cart from "./components/Cart";
import { AuthProvider } from "./components/utils/customeHooks/authContext";
import Login from "./components/Login";
import Register from "./components/Register";
import RecipesRestaurant from "./components/RecipesRestaurant";
const AppLayout = ()=>{

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = 'light';
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("displayMode", newMode ? "dark" : "light");
  };

    
  const onlineStatus = useOnlineStatus();
// console.log("Status from body",onlineStatus);
if (onlineStatus === false) return <h1>Looks like you're Offline!! Please Check your Internet Connection</h1>
    return(
      <Provider store={appStore}>
        <AuthProvider>
      <div className={`${darkMode?"dark":""}`}>

          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet/>
      </div>
      </AuthProvider>
      </Provider>
    )
    
} ;

const appRouter = createBrowserRouter ([


  {
   path : "/",
   element : <AppLayout/>,
   
   children : [
    
    {
      path : "/",
      element:<Body/>
    },
    {
      path : "/login",
      element:<Login/>
    },
    {
      path : "/register",
      element:<Register/>
    },
    {
      path : "/restaurants/:resId",
      element:<RestaurantsMenu/>
    },
    {
      path: "/collection/:query",
      element: <RecipesRestaurant />
  },
    {
    path : "/about",
    element:<About/>
  },
  {
    path : "/cart",
    element:<Cart/>
  },
  {
    path : "/contact",
    element:<ContactUs/>
  },
  {
    path : "/game",
    element:<Game/>
  },
],
errorElement : <Error/>
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);      
