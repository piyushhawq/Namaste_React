import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import HomeShimmer from "./HomeShimmer";
import useResturentMenue from "./utils/customeHooks/useResturentMenue";
import ResturantCategory from "./ResturantCategory";

const RestaurantsMenu =()=>{

const {resId} = useParams();

const [resInfo, itemCards] = useResturentMenue(resId);
const [showIndex,setShowIndex] = useState(0);


if (resInfo === null || undefined) {
    return <HomeShimmer />;
  }


// console.log("Item cards",itemCards);

  const { name,cuisines,costForTwo} = resInfo;

const categories = itemCards.filter((category) =>
    category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


console.log("categories",categories)
    return   (


<div className="text-center">

  

    <h1 className="my-8 text-2xl font-boldt-">{name}</h1>
      <h3>{cuisines.join(",")} Rs {costForTwo / 100} for two</h3>
    
    <h2>Menu</h2>
<ul>


    

    {/* category acordion */}

    {categories.map((category,index)=> 
    // controlled component
    <ResturantCategory 
    key ={category?.card?.card.title}
    data={category?.card?.card}
    showItems ={index === showIndex ? true : false}
    setShowIndex ={()=>setShowIndex(index)}
     /> )

}

</ul>
</div>

    );
}

export default RestaurantsMenu;