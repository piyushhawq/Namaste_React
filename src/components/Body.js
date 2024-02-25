import { useState ,useEffect} from "react"; 
import ResturentCard from "./ResturentCard";
import HomeShimmer from "./HomeShimmer";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [filterdRestaurants,setFilterdRestaurants] = useState([]);
  const [jsonData,setJsonData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState('');
  const [searchText, setSearchText] = useState('');
 const [avilable, setAvilable] = useState(false);

  const handleSearch = () => {
    console.log("Searching for location:", location);

  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };


  useEffect(()=>{
fetchData();
  },[])

  const fetchData = async()=>{
 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
 const json = await  data.json();
 console.log("api data",json);
 setJsonData(json)

  }

useEffect(() => {
  const fetchRestaurants = async () => {
    try {
      
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`);
      const data = await response.json();
      // console.log("data",data)
      const { lat, lon } = data[0];
      // console.log("longitude & latitude",lat,lon)
      const apiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      const responseRestaurants = await fetch(apiUrl);
      const dataRestaurants = await responseRestaurants.json();
      setJsonData(dataRestaurants);
      // setLoading(false);

    } catch (error) {
      // setLoading(false);

      console.error('Error fetching data:', error);
 
    }
  };

  if (location) {
    fetchRestaurants();
  }
}, [location]);


  useEffect(() => {
    // Check window size or any other condition to determine which index to use
    const desiredIndex = window.innerWidth > 768 ? 4 : 2;
    const restaurants = jsonData?.data?.cards[desiredIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilterdRestaurants(restaurants);
        console.log("resturent cards ", restaurants);
    }
  }, [jsonData]);





    return listOfRestaurants && listOfRestaurants.length === 0 ? (
        <HomeShimmer />
      )  :(
     <div className="body">
       

      

                <div className="filter">
                <input
                    type="text"
                    placeholder="Enter you city"
                    value={location}
                    onChange={handleInputChange}
                
                  />
                  <button  className="filter-btn" onClick={() => setLocation(location)}>Update Location</button>
                <input
                    type="text"
                    placeholder="Search Cafe"
                    value={searchText}
                    onChange={(e)=>{
                      setSearchText(e.target.value);
                    }}
                
                  />
                  <button className="filter-btn" onClick={() => {
                    // filter
                    const filteredRes = listOfRestaurants.filter(
                      (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );  setFilterdRestaurants(filteredRes);
                  }}>Search</button>
       
        <button className="filter-btn" onClick={()=>{
            const filteredList = filterdRestaurants.filter(
                (res) => res.info.avgRating>4
            );
            if (filteredList.length === 0) {
             setAvilable(true);
            } else {
              
            setFilterdRestaurants(filteredList);
            }
        }}>Top Rated Resturants</button>

<button className="filter-btn" onClick={()=>{
            const filteredList = filterdRestaurants.filter(
                (res) => res.info.veg === true
            );
            if (filteredList.length === 0) {
              setAvilable(true);
             } else {
               
            setFilterdRestaurants(filteredList);
             }
        }}>Pure Veg</button>

<button className="filter-btn" onClick={()=>{
            const filteredList = filterdRestaurants.filter(
                (res) => res.info.sla.deliveryTime <30
            );
            if (filteredList.length === 0) {
              setAvilable(true);
             } else {
               
            setFilterdRestaurants(filteredList);
             }
        }}>Fast Delivery</button>
        <button className="filter-btn" onClick={()=>{
            setFilterdRestaurants(listOfRestaurants);
            setAvilable(false);
        }}>Reset</button>

                </div>


 <div className="res-container">
  {avilable ? <h1>Not available 😯😌😢</h1> : (
    filterdRestaurants && filterdRestaurants.map(resturant => (
      <ResturentCard key={resturant.info.id} resData={resturant} />
    ))
  )}
</div>

     </div>
    )
}
export default Body;