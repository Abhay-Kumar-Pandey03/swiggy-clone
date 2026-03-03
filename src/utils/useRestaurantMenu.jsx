import { useState, useEffect } from "react";
import restaurantMenuMock from "./MenuMock";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            const restaurant = restaurantMenuMock.find(
                (res) => res.restaurantId === resId
            );

            setResInfo(restaurant || null);
        };

        fetchData();
    }, [resId]); // ✅ important

    return resInfo;
};

export default useRestaurantMenu;