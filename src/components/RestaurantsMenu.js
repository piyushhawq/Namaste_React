import { useParams } from "react-router-dom";
import HomeShimmer from "./HomeShimmer";
import useResturentMenue from "./utils/customeHooks/useResturentMenue";
const RestaurantsMenu =()=>{

const {resId} = useParams();

const [resInfo, itemCards] = useResturentMenue(resId);


if (resInfo === null || undefined) {
    return <HomeShimmer />;
  }


// console.log("resInfo",resInfo);

  const { name,cuisines,costForTwo} = resInfo;

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