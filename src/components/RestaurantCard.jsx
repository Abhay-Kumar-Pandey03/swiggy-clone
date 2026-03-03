import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        cloudinaryImageId,
    } = props;

    // console.log(props);

    const imageUrl = IMG_URL + cloudinaryImageId;

    return (
        <div data-testid="resCard" className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:bg-orange-50 transition-all duration-300 cursor-pointer">

            {/* Image */}
            <div className="w-full h-44 overflow-hidden">
                <img
                    alt="res-logo"
                    src={imageUrl}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">

                <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {name}
                </h3>

                <h4 className="text-sm text-gray-500 truncate">
                    {cuisines?.join(", ")}
                </h4>

                <div className="flex justify-between items-center text-sm mt-2">

                    <span className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                        {avgRating} ⭐
                    </span>

                    <span className="text-gray-600">
                        {sla?.deliveryTime} mins
                    </span>
                </div>

                <h4 className="text-sm font-medium text-gray-700">
                    {costForTwo}
                </h4>

            </div>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md z-10">
                    Promoted
                </span>

                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;