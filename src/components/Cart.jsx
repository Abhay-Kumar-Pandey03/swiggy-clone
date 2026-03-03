import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (<div className="text-center m-3 p-4">

        <div className="flex justify-between items-center mb-6 w-6/12 mx-auto">
            <h1 className="text-3xl font-semibold">🛒 Cart</h1>

            <button
                className="bg-red-500 hover:bg-red-600 transition duration-200 text-white px-4 py-2 rounded-lg shadow-md"
                onClick={handleClearCart}
            >
                Clear Cart
            </button>
        </div>

        {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-10 text-lg">
                Your cart is empty. Please add some items to the cart.
            </p>
        ) : (
            <div className="w-6/12 mx-auto text-left">
            <ItemList items={cartItems} />
            </div>
        )}

    </div>
    );

}

export default Cart;