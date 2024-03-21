import ResturentCard ,{withVegLabel} from "./ResturentCard"
import HomeShimmer from "./HomeShimmer";

import { API_END ,API_START,UNSERVICEABLE_ERROR,payload,SERVER_URL} from "./utils/constants"; 
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import RestaurantMiniCard from "./RestaurantMiniCard";
import checkIt from "./checkIt";
import Recipes from "./Recipes";


import DataFooter from "./DataFooter";
import { useSelector } from "react-redux";

const Body = () => {
    // const { loggedInUser, setUserName } = useContext(UserContext)
    const resContainerRef = useRef(null)
    const footerDataRef = useRef(null)
    const [makeApiCall, setMakeApiCall] = useState(false)

    const [searchText, setSearchText] = useState("")
  

    const [topRestaurantChain, setTopRestaurantChain] = useState([])
    
    const [recipes, setRecipes] = useState([])
    const [bestPlace, setBestPlace] = useState([])
    const [bestCuisines, setBestCuisines] = useState([])
    const [exploreRestaurant, setExploreRestaurant] = useState([])

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // const RestaurantCardOffer = withOfferLabel(RestaurantCard);

    // const MiniResCard = checkIt(RestaurantMiniCard)
    const RecipesCard = checkIt(Recipes)

      const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [filterdRestaurants,setFilterdRestaurants] = useState([]);

   const [avilable, setAvilable] = useState(false);
const ResturentCardVeg = withVegLabel(ResturentCard);

    const userLocation = useSelector(store => store.location)
    const {latitude, longitude} = userLocation

    const debounce = (func, delay=300) =>{
        let timer;

        return function(){

            clearTimeout(timer)
            let args = arguments
            let Content = this
            timer = setTimeout(()=>{
                // console.log("hello ", resLists?.length, filteredList?.length)
                func.apply(Content, args)
                // resLists?.length > 0 && func.apply(Content, args)
            }, delay)
        }
    }
    const getData = () => {
        // Handle visibility
        let resContainerVisibility, footerDataVisibility;
        if (resContainerRef.current) {
          const { top, bottom } = resContainerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          resContainerVisibility = top < windowHeight && bottom >= 120;
        }
        if (footerDataRef.current) {
          const { top, bottom } = footerDataRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          footerDataVisibility = top < windowHeight && bottom >= 0;
        }
      
        const apiCall = resContainerVisibility && footerDataVisibility;
        setMakeApiCall(apiCall);
        if (apiCall) {
          postData();
        }
      };
    const scrollHandler = debounce(getData)

    useEffect(() => {
        //to scroll top
        window.scrollTo(0, 0)
        fetchData();
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [userLocation]);

    const fetchData = async () => {
        try{
        const data = await fetch(`${SERVER_URL}/api/swiggy/getData?lat=${latitude}&lng=${longitude}`)

        const json = await data.json();
        console.log(json);
       

        //update payload
        payload.nextOffset = json?.data?.pageOffset?.nextOffset;
        payload._csrf = json?.csrfToken;
        payload.widgetOffset.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo = json?.data?.pageOffset?.widgetOffset?.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo;
        

        //swiggy changed response formate
              
    const ResData = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !=
        undefined
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
    const ResRecipi = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.imageGridCards?.info!=
        undefined
    )?.card?.card?.imageGridCards?.info;
    setRecipes(ResRecipi)

    setListOfRestaurants(ResData);
        setFilterdRestaurants(ResData);



        setTopRestaurantChain(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants)
        setRecipes(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)

        setBestPlace(json?.data?.cards[7]?.card?.card?.brands)
        setBestCuisines(json?.data?.cards[8]?.card?.card?.brands)
        setExploreRestaurant(json?.data?.cards[9]?.card?.card?.brands)
        }
        catch{
            setResLists(null)
        }
    }

    const postData = async () =>{
        try{
        const url = SERVER_URL + "/api/swiggy/update"
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body : JSON.stringify(payload)
        })

        const json = await data.json();
        payload.widgetOffset.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo = json?.data?.pageOffset?.widgetOffset?.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo;
       
        setListOfRestaurants(prev => [...prev, ...(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)]);
    setFilterdRestaurants(prev => [...prev, ...(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)]);  
       
        setMakeApiCall(false);
        
  

        }
        catch{
            setMakeApiCall(false);
        }
    }

    // const onlineStatus = useOnlineStatus();
    // if (onlineStatus === false) return <>
    //     <h1>It's look like you are offline!!!</h1>
    //     <p>Please check your network connectivity...</p>
    // </>


   
    if(listOfRestaurants?.length === 0) return <HomeShimmer />
    return (
        !listOfRestaurants ? <div className="flex justify-center">
            <img src={UNSERVICEABLE_ERROR} alt="unservisable"/>
        </div>
            :
            <div className="body mt-0 overflow-x-hidden dark:bg-[#222222]">
               
                <hr className=" mb-2 mx-8"></hr>
                 <div className="mt-8  ">
                    <h2 className="text-2xl sm:font-bold mb-4 ml-8 sm:ml-16 md:ml-24 dark:text-white">What's on your mind?</h2>
                    <div className=" dark:bg-[#ffffff]">
                    <RecipesCard resData={recipes} />
                    </div>
                   
                </div>

                {/* <hr className=" mb-2 mx-8"></hr> */}
                <div className="filter m-4 p-4 md:flex justify-center">
                    <input data-testid="searchInput" type="text" className="p-2 ml-[10%] sm:ml-[20%] md:ml-4 m-4 w-[16rem] sm:w-[24rem] border-2 border-solid border-gray-500 rounded-xl" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <div className="flex justify-center">
                        <button className="px-4 py-2 my-4 bg-green-100 rounded-lg" onClick={() => {
                            const filterdRestaurants = listOfRestaurants?.filter((res) => (res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) || res?.info?.cuisines.join(',').toLowerCase().includes(searchText.toLowerCase())));
                            setFilterdRestaurants(filterdRestaurants)
                        }} >Search</button>
                        <button className="px-4 py-2 my-4 mx-8 bg-gray-100 rounded-lg" onClick={() => {
                            setFilterdRestaurants(listOfRestaurants.filter(resData => resData?.info?.avgRating > 4))
                        }}>Top Rated Restaurants</button>

<button className="m-2 p-2  bg-green-400 rounded-lg" onClick={()=>{
            const filteredList = filterdRestaurants.filter(
                (res) => res.info.veg === true
            );
            if (filteredList.length === 0) {
              setAvilable(true);
             } else {
               
            setFilterdRestaurants(filteredList);

             }
        }}>Pure Veg</button>

<button className="m-2 p-2  bg-green-400 rounded-lg" onClick={()=>{
            const filteredList = filterdRestaurants.filter(
                (res) => res.info.sla.deliveryTime <30
            );
            if (filteredList.length === 0) {
              setAvilable(true);
             } else {
               
            setFilterdRestaurants(filteredList);
             }
        }}>Fast Delivery</button>
        <button className="m-2 p-2 bg-red-500 rounded-lg text-white" onClick={()=>{
            setFilterdRestaurants(listOfRestaurants);
            setAvilable(false);
        }}>Reset</button>
                    </div>

                </div>

                <hr className="mt-1 mb-4 mx-8"></hr>
                <h3 className="sm:font-bold text-2xl ml-8 sm:ml-16 md:ml-24 dark:text-white">Restaurants with online food delivery</h3>
                <div className="flex flex-wrap justify-center" ref={resContainerRef}>
               


                        <div className="flex flex-wrap justify-center ">
                        {avilable ? <h1>Not available 😯😌😢</h1> : (
                            filterdRestaurants && filterdRestaurants
                            .filter((restaurant, index, self) =>
                            index === self.findIndex(r => r.info.id === restaurant.info.id)
                            ).map(resturant => (


                            <Link to = {"/restaurants/"+ resturant.info.id} key={resturant.info.id}>  
                        {resturant.info.veg ?<ResturentCardVeg className ="rescardlist" resData={resturant}/>:
                            <ResturentCard className ="rescardlist" resData={resturant} />}
                            
                            </Link>


                            ))
                        )}
                        </div>
                </div>

                {
                    makeApiCall && <HomeShimmer />
                }
 
 
                <hr className=" mb-2 mx-8"></hr>
                <div ref={footerDataRef}>
                    <DataFooter bestPlace={bestPlace} bestCuisines={bestCuisines} exploreRestaurant={exploreRestaurant}/>
                </div>
            </div>
    )
}

export default Body