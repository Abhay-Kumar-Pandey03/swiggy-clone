import React from "react";
import { useDispatch } from "react-redux";

import {addItem} from "../store/cartSlice";
import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch an action to add item to the cart
        dispatch(addItem(item));
    }

    return (
        <div className="divide-y">
            {items.map((item) => (
                <div
                    data-testid="foodItems"
                    key={item.id}
                    className="flex justify-between gap-6 py-6"
                >
                    {/* LEFT SECTION */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {item.name}
                        </h3>

                        <p className="text-gray-900 font-medium mt-1">
                            ₹{item.price}
                        </p>

                        <p className="text-green-600 text-sm font-medium mt-1">
                            ⭐ {item.rating}
                        </p>

                        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="w-32 relative">
                        <img
                            src={IMG_URL + item.cloudinaryImageId}
                            alt={item.name}
                            className="w-32 h-28 object-cover rounded-xl shadow-sm"
                        />

                        {/* ADD BUTTON */}
                        <button 
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-green-600 font-semibold px-6 py-1 
                        rounded-md shadow-md border hover:bg-gray-50 transition"
                        onClick = {() => handleAddItem(item)}
                        >
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;