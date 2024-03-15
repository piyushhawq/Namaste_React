import { CDN_URL, STAR_ICON_URL } from "./utils/constants";
const ResturentCard =(props)=>{
    const  { resData }=props;
    // console.log("resData",resData)
    const {name,
      cloudinaryImageId,
      costForTwo,
      cuisines,
     sla,
     locality,
      avgRating}= resData?.info;
      return(
          // <h1>testing</h1>
          <div className="m-4 p-4 w-[250px]  bg-[#31363F] text-[#EEEEEE] rounded-xl shadow-md hover:bg-gray-200 dark: shadow-md dark: shadow-gray-800">
          {/* // <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-xl shadow-xl hover:bg-gray-100 hover:shadow-lg hover:shadow-gray-800"> */}
  
          <img className=" rounded-lg w-[225px] h-[150px] object-cover" src={CDN_URL+cloudinaryImageId} alt ="reslogo"/>
              <h3 className="font-bold py-2 text-lg">{name}</h3>
   

          <div className="flex justify-between">
            <div className="flex items-center"> 
              <img className="w-5" src={STAR_ICON_URL} alt="star icon" /> 
              <h4 className="text-sm font-bold mx-2">{avgRating} star </h4>
            </div>
            <h4 className="text-sm font-bold">{sla.deliveryTime} minutes</h4> 
          </div>



          <div className="flex justify-between ">
          {locality.length>15 ?(
            <h4  className="text-sm font-bold mx-1">{locality.slice(0,15)}...</h4>
          ):(
          <h4  className="text-sm font-bold mx-1">{locality}</h4>
          )}
          <h4  className="text-sm font-bold mx-1">{costForTwo}</h4>
          </div>

<div>
    {cuisines.length > 3 ? (
        <h4 className="text-sm font-medium m-1">{cuisines.slice(0, 3).join(", ")}...</h4>
    ) : (
        <h4 className="text-sm font-medium mx-1">{cuisines.join(", ")}</h4>
    )}
</div>


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