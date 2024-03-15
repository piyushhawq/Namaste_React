import React from 'react'
import { FOOD_NOT_FOUND, ITEM_LOGO_URL } from './utils/constants';
import { useDispatch,useSelector } from 'react-redux';
import { addItem,removeItem } from './utils/cartSlice';
const ItemList = ({items}) => {
    // console.log("items",items)

//     const dispatch = useDispatch();

// const handleAddItem=(item)=>{
// dispatch(addItem(item))
// }

const dispatch = useDispatch();
const cartItems = useSelector(state => state.cart.items);

const selectedCount = cartItems.filter(cartItem => cartItem.id === items.id).length;

const handleAddItem = (item) => {
  dispatch(addItem(item));
};

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
          {/* <button className='p-1 bg-white text-green-400 rounded text-center  mt-[-65px] ml-6 mb-1' onClick={()=>handleAddItem(item)}>Add + </button> */}

          {selectedCount > 0 ? (
        <div className="flex bg-slate-100 w-16 text-green-400 border border-black shadow-md absolute  p-1 rounded-md cursor-pointer justify-between ml-5 mb-0">
          <div className="flex items-center">
            <button onClick={() => handleRemoveItem(item)} className="text-lg">-</button>
          </div>
          <div className="flex-1 text-center">{selectedCount}</div>
          <div className="flex items-center">
            <button onClick={() => handleAddItem(item)} className="text-lg">+</button>
          </div>
        </div>
      ): (
        <button
          className="items-center bg-slate-100 w-14 text-green-400 border border-black shadow-md absolute p-1 rounded-md cursor-pointer justify-between ml-5 mb-0"
          onClick={() => handleAddItem(item)}
        >
          Add
        </button>
      )}
</div>

     </div>
  ))}
    </div>
  )
}

export default ItemList;