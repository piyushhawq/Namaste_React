import React from 'react'
import { FOOD_NOT_FOUND, ITEM_LOGO_URL } from './utils/constants';
import { useDispatch } from 'react-redux';
import { addItem,removeItem } from './utils/cartSlice';
const CartItemList = ({items}) => {
    // console.log("items",items)

    const dispatch = useDispatch();

const handleAddItem=(item)=>{
dispatch(addItem(item))
}

  
const handleRemoveItem = (item) => {
  dispatch(removeItem(item));
};
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
          <img className='w-24 h-[70px] mx-auto  rounded-lg shadow-2xl '
          //  src={ ITEM_LOGO_URL + item.card.info.imageId}
           src={item.card.info.imageId ? ITEM_LOGO_URL + item.card.info.imageId : FOOD_NOT_FOUND }
           />
         

</div>

<button className='p-1 bg-white text-green-400 rounded text-center  mt-[-65px] ml-6 mb-1' onClick={()=>handleAddItem(item)}>Add + </button>
          <button className='p-1 bg-white text-green-400 rounded text-center  mt-[-65px] ml-6 mb-1' onClick={()=>handleRemoveItem(item)}>- Remove  </button>
     </div>
  ))}
    </div>
  )
}

export default CartItemList;