import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [openIndex, setOpenIndex] = useState(null);

    if (!resInfo) return <Shimmer />;

    const { restaurantName, rating, menu } = resInfo;
    // console.log(resInfo);

    return (
        <div className="min-h-screen bg-gray-50 px-6 md:px-16 py-10">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto p-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    {restaurantName}
                </h1>

                <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold inline-block mt-3">
                    {rating} ⭐
                </span>


                <div className="mt-8 space-y-6">
                    {menu.map((section, index) => (

                        <RestaurantCategory key={section.title}
                            section={section}
                            showItems={openIndex === index ? true : false}
                            setOpenIndex={ () => setOpenIndex(openIndex == index ? null : index)}
                        />

                    ))}
                </div>

            </div>
        </div>
    );
};

export default RestaurantMenu;



// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestrauntMenu";
// import RestaurantCategory from "./RestaurantCategory";
// import { useState } from "react";

// const RestaurantMenu = () => {
//   const { resId } = useParams();

//   const dummy = "Dummy Data";

//   const resInfo = useRestaurantMenu(resId);

//   const [showIndex, setShowIndex] = useState(null);

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[0]?.card?.card?.info;

//   const { itemCards } =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   const categories =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.["card"]?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   //console.log(categories);

//   return (
//     <div className="text-center">
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <p className="font-bold text-lg">
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>
//       /* categories accordions */
//      {
//     categories.map((category, index) => (
//         // controlled component
//         <RestaurantCategory
//             key={category?.card?.card.title}
//             data={category?.card?.card}
//             showItems={index === showIndex ? true : false}
//             setShowIndex={() => setShowIndex(index)}
//             dummy={dummy}
//         />
//     ))
//     }
//      </div >
//   );
// };

// export default RestaurantMenu;

