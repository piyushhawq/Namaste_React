import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import HomeShimmer from "./HomeShimmer";
const RestaurantsMenu =()=>{
const [resInfo,setResInfo]= useState (null);
// const [jsonData,setJsonData] = useState(null);
const [itemCards,setItemCards] =useState ();
// const [regularItemCards,setRegularItemCards] =useState ();

const {resId} = useParams();


useEffect(()=>{
fetchMenue();
},[]);

const fetchMenue = async() =>{
 const  data  = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
 const  json = await data.json();
 console.log(json);


    const ResData = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.info !=
        undefined
    )?.card?.card?.info;
    
   
    setResInfo(ResData);
       
    const ResCard = json?.data?.cards?.find(
        (card) =>
          card?.groupedCard?.cardGroupMap?.REGULAR?.cards !=
          undefined
      )?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //   REGULAR?.cards[1].card.card for future ref
        setItemCards(ResCard);
 
}



if (resInfo === null) {
    return <HomeShimmer />;
  }



//   if (resInfo === undefined || itemCards === undefined) {
//     return <HomeShimmer />;
//   }

  const { name,cuisines,costForTwo} = resInfo;



//   console.log("resInfo",resInfo);
  console.log("itemCards all",itemCards);
  console.log("itemCards",itemCards[1].card.card.itemCards)
//   console.log("resInfo name",resInfo.name);
//   console.log("resInfo cft",resInfo.costForTwo);
    return   (


<div className="menue">

  

    <h1>{name}</h1>
      <h3>{cuisines.join(",")} Rs {costForTwo / 100} for two</h3>
    
    <h2>Menu</h2>
<ul>

   {itemCards.find((card)=> card?.card?.card?.itemCards != undefined)?.card?.card?.itemCards.map(res  =><li key ={res.card.info.id}>{res.card.info.name} -  Rs{ res.card.info.price/100}</li> )}

    

</ul>
</div>
    );
}

export default RestaurantsMenu;