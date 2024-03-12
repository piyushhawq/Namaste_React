import React from 'react'
import { ITEM_LOGO_URL } from './utils/constants';

const ItemList = ({items}) => {
    console.log("items",items)
  return (
    <div>
  {items.map((item)=>(
   
 <div className='p-2 m-2  border-black border-b-[1px] text-left flex justify-between' key ={item.card.info.id}>
   
<div  className='py-2 w-10/12'>
   
    <div >
       <span>{item.card.info.name}</span>
        <span> - ₹ {item.card.info.price/100 ||item.card.info.defaultPrice/100}</span>
        </div>
 
     <p className='text-xs'>{item.card.info.description}</p>
     </div>
    
<div className='w-2/12'>   
          <img className='w-24 h-[70px] mx-auto  rounded-lg shadow-2xl ' src={ ITEM_LOGO_URL + item.card.info.imageId}/>
          <button className='p-1 bg-white text-green-400 rounded text-center'>Add + </button>
</div>

     </div>
  ))}
    </div>
  )
}

export default ItemList;