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
          <div className="res-card">
             <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt ="reslogo"/>
              <h3>{name}</h3>
              <h4 className="cuisines">{cuisines.join(", ")}</h4>
              <h4>{costForTwo}</h4>
              <h4>{avgRating} star</h4>
              <h4>{sla.deliveryTime} minutes</h4>
  
          </div>
      )
  }

  export default ResturentCard;