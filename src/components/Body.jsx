import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from "../utils/temp";

const Body = () => {
    const [allRestaurantList, setAllRestaurantList] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const { loggedInUser, setUser } = useContext(UserContext);

    useEffect(() => {
        fetchedData();
    }, []);

    const fetchedData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
        );

        const json = await data.json();

        const restaurantCard = json?.data?.cards?.find(
            (card) =>
                card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants =
            restaurantCard?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || [];

        setRestaurantList(restaurants);
        setAllRestaurantList(restaurants);
    };

    if (restaurantList.length === 0) {
        return <Shimmer />;
    }

    // console.log(restaurantList);

    return (
        <div className="px-6 md:px-16 py-8 bg-gray-50 min-h-screen">

            {/* 🔍 Search Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
                <div className="flex w-full md:w-[500px] shadow-lg rounded-xl overflow-hidden bg-white">

                    <input
                        type="text"
                        data-testid="searchInput"
                        placeholder="Search restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="flex-grow px-5 py-3 text-gray-700 outline-none"
                    />

                    <button
                        className="px-6 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300"
                        onClick={() => {
                            const filteredRestaurants = allRestaurantList.filter((res) =>
                                res?.info?.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );

                            if (!filteredRestaurants.length) {
                                alert("No restaurant found with this name");
                                return;
                            }

                            setRestaurantList(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div>
                <input  className="border border-black" value={loggedInUser || ""} onChange={(e) => {setUser(e.target.value)}}/>
            </div>

            {/* ⭐ Filter Section */}
            <div className="flex justify-center mb-12">
                <button
                    className="px-6 py-2 bg-white border border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-500 hover:text-white transition duration-300 shadow-sm"
                    onClick={() => {
                        const topRatedList = allRestaurantList.filter((res) =>
                            Number(res?.info?.avgRating) > 4.3
                        );
                        setRestaurantList(topRatedList);
                    }}
                >
                    Top Rated
                </button>
            </div>

            {/* 🍽 Restaurant Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {restaurantList.map((restaurant) => (


                    <div
                        key={restaurant?.info?.id}
                        className="bg-white rounded-xl p-4 shadow-md transform hover:scale-105 hover:bg-orange-50 transition duration-300 cursor-pointer"
                    >
                        <Link
                            key={restaurant?.info.id}
                            to={"/restaurant/" + restaurant?.info.id}
                        >
                        {
                            (restaurant?.info?.isPromoted || restaurant?.info?.differentiatedUi?.displayType?.includes("ADS")) ?
                                <RestaurantCardPromoted {...restaurant?.info} /> : <RestaurantCard {...restaurant?.info} />
                        }
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;