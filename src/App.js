import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Home from "./components/Home";
import RestaurantsMenu from "./components/RestaurantsMenu";

const AppLayout = ()=>{
    return(
      <div className="app">
          <Header/>
      <Outlet/>
      </div>

    )
    
} ;

const appRouter = createBrowserRouter ([
 
  {
    path : "/",
    element : <Home/>,
    errorElement : <Error/>
 },
  {
   path : "/home",
   element : <AppLayout/>,
   children : [
    
    {
      path : "/home/",
      element:<Body/>
    },
    {
      path : "/home/restaurants/:resId",
      element:<RestaurantsMenu/>
    },
    {
    path : "/home/about",
    element:<About/>
  },
  {
    path : "/home/contact",
    element:<ContactUs/>
  },
],
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);      
