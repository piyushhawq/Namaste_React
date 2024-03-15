import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "./utils/cartSlice";

const Cart =()=>{
// very important for good optimization subscribe to exact store , it will be more efficient,like below you can also subscribe store but it will subscribe whole store
    const cartItems= useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    }

    return(
      <div> <div className="text-center m-5 p-5">
<h1 className="text-2xl font-bold" >Cart</h1>
        </div>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-red-600 text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
       {cartItems?.length===0 && <h1 className="text-xl font-mono"> Cart is Empty Please add something to the cart!</h1>}
        <CartItemList items={cartItems}/>
        </div>

        </div> 
    )
};

export default Cart;