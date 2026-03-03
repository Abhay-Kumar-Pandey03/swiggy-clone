import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL, CART_URL } from '../utils/constants';
import UserContext from "../utils/temp";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    useEffect(() => {
        // console.log("Header useEffect");
    }, []);

    //Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return (
        <div className='flex justify-between items-center p-2 bg-white shadow-md sticky  z-50'>
            
            <div className='w-40'>
                <img 
                    className="w-full object-contain cursor-pointer" 
                    src={LOGO_URL}
                    alt="logo"
                />
            </div>

            <div className="nav-items mr-2">
                <ul className="flex items-center gap-8 text-lg font-medium text-gray-700">
                    
                    <li className="font-semibold">
                        {onlineStatus ? "🟢 Online" : "🔴 Offline"}
                    </li>

                    <li className="hover:text-orange-500 transition duration-200">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="hover:text-orange-500 transition duration-200">
                        <Link to="/grocery">Grocery</Link>
                    </li>

                    <li className="hover:text-orange-500 transition duration-200">
                        <Link to="/about">About</Link>
                    </li>

                    <li className="hover:text-orange-500 transition duration-200">
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className="hover:text-orange-500 transition duration-200 cursor-pointer">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>

                    <button
                        className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300 shadow-sm"
                        onClick={() => {
                            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>

                    <li className="hover:text-orange-500 transition duration-200 cursor-pointer">
                        {loggedInUser}
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header;