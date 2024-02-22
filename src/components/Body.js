import { useState } from "react"; 
import ResturentCard from "./ResturentCard";
import resList from "./utils/mockData";

const Body = () => {
  const [listOfResturants,setListOfResturants] = useState(resList)

//   const filterResturants =()=>{
//    const filteredList = listOfResturants.filter(
//         (res)=> res.info.avgRating>4
//         )
         
//         setListOfResturants(filteredList);
//     }
    return (
     <div className="body">
        {/* <div className="Search">
            <input type="text"/>
            <button> Search</button>
        </div> */}
        <div className="filter">
<button className="filter-btn" onClick={()=>{
    const filteredList = listOfResturants.filter(
        (res) => res.info.avgRating>4
    );
    setListOfResturants(filteredList);
}}>Top Rated Resturants</button>
<button className="filter-btn" onClick={()=>{
    setListOfResturants(resList);
}}>Reset</button>
        </div>
 <div className="res-container">
{
    listOfResturants.map(resturant => <ResturentCard key ={resturant.info.id} resData ={resturant}/>)
}


 </div>
     </div>
    )
}
export default Body;