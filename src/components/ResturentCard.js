import { CDN_URL } from "./utils/constants";
const ResturentCard =(props)=>{
    const  { resData }=props;
  //   console.log("resData",resData)
    const {name,
      cloudinaryImageId,
      costForTwo,
      cuisines,
     sla,
      avgRating}= resData?.info;
      return(
          // <h1>testing</h1>
          <div className="m-4 p-4 w-[275px]  bg-gray-100 rounded-xl shadow-lg hover:bg-gray-200">
             <img className=" rounded-md w-[250px] h-[160px] object-cover" src={CDN_URL+cloudinaryImageId} alt ="reslogo"/>
              <h3 className="font-bold py-2 text-lg">{name}</h3>
              <h4 className="cuisines">{cuisines.join(", ")}</h4>
              <h4>{costForTwo}</h4>
              <h4>{avgRating} star</h4>
              <h4>{sla.deliveryTime} minutes</h4>
  
          </div>
      )
  };

export const withVegLabel =(ResturentCard)=>{
  return (props)=> {
    return(
      <div>
<label className="absolute bg-green-400 text-white mx-4 py-[2px] px-2 rounded"> Veg</label>
<ResturentCard {...props}/>
      </div>
    )
    }
}

  export default ResturentCard;