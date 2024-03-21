import { useEffect ,useState} from "react";
import { SERVER_URL} from "../constants";
import { useSelector } from "react-redux";



 const useResturentMenue = (resId) =>{
    // console.log("resid",resId);
    const [resInfo,setResInfo]= useState (null);
    const [itemCards,setItemCards] =useState ();

    const {latitude, longitude} = useSelector(store => store.location)

    
    useEffect(()=>{
        fetchMenue();
        },[]);

        const fetchMenue = async() =>{

            const data = await fetch(`${SERVER_URL}/api/swiggy/getMenu?lat=${latitude}&lng=${longitude}&restaurantId=${resId}`)

            // const  data  = await fetch(RES_MENU_URL + resId);
            const  json = await data.json();
            // console.log(json);
           
           
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


        //    return  resInfo;
           if (resInfo !== null && itemCards !== null) {
            return [resInfo, itemCards];
        } else {
            return [null, null]; // Or you can return some default values if needed
        }
  
 }

 export default useResturentMenue ;


