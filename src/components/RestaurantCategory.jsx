import React, { useState } from 'react'
import { IMG_URL } from "../utils/constants";
import ItemList from './ItemList';


const RestaurantCategory = ({ section , index, showItems, setOpenIndex}) => {
    
    const handleOnclick = () => {
        setOpenIndex();
    }

    return (
        <div>
            <div
                className="bg-gray-100 my-2 flex justify-between px-3 items-center py-1 rounded-md cursor-pointer hover:shadow-md mr-2"
                onClick={() => setOpenIndex(index)}
            >
                <h2 className="text-lg font-bold">
                    {section.title}
                </h2>

                <span
                    className={`transition-transform duration-300 ${showItems ? "rotate-180" : ""
                        }`}
                >
                    ▼
                </span>
            </div>

            <div className="ml-4 mt-3 mr-2 bg-white rounded-lg shadow-sm">
                {showItems && (
                    <ItemList items={section.items} />
                )}
            </div>

        </div>
    )
}

export default RestaurantCategory;