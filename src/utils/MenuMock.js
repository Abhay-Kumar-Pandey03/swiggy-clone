const restaurantsMenuMock = [

    //r1: Burger King
    {
        restaurantId: "5934",
        restaurantName: "Burger King",
        rating: 4.3,
        menu: [
            {
                title: "Recommended",
                items: [
                    {
                        id: "bk1",
                        name: "Original Whopper Veg (XL size Bun)",
                        price: 189,
                        rating: 4.4,
                        description:
                            "Crunchy veg patty with lettuce, onions, tomatoes and smoky sauces.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg",
                    },
                    {
                        id: "bk2",
                        name: "Crispy Veg Burger",
                        price: 99,
                        rating: 4.2,
                        description:
                            "Crispy veg patty with creamy mayo and lettuce.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2025/11/20/4389cb8d-93e5-4dd5-8013-73a927dd6b31_622133db-f6cc-4f88-ba37-118df0b143ce.jpg",
                    },
                    {
                        id: "bk3",
                        name: "Veggie Strips",
                        price: 129,
                        rating: 4.1,
                        description:
                            "Golden fried veggie strips served hot.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/aeac450c-d789-4c00-a593-05e352a5b325_4eab783e-7b7d-4401-b8e4-64b1fba9bbf5.jpg",
                    },
                ],
            },
            {
                title: "Burgers",
                items: [
                    {
                        id: "bk4",
                        name: "Paneer King Burger",
                        price: 149,
                        rating: 4.3,
                        description:
                            "Juicy paneer patty layered with fresh veggies.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/paneer_burger.jpg",
                    },
                    {
                        id: "bk5",
                        name: "Double Veg Delight",
                        price: 179,
                        rating: 4.5,
                        description:
                            "Double layered veg patties with cheese.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/double_veg.jpg",
                    },
                    {
                        id: "bk6",
                        name: "Mexican Veg Burger",
                        price: 159,
                        rating: 4.2,
                        description:
                            "Mexican spiced veg patty with jalapenos.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/mexican_veg.jpg",
                    },
                ],
            },
            {
                title: "Meals",
                items: [
                    {
                        id: "bk7",
                        name: "Veg Whopper Meal",
                        price: 299,
                        rating: 4.4,
                        description:
                            "Veg Whopper + Fries + Coke.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/veg_whopper_meal.jpg",
                    },
                    {
                        id: "bk8",
                        name: "King Veg Meal",
                        price: 249,
                        rating: 4.2,
                        description:
                            "King burger with fries and drink.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/king_meal.jpg",
                    },
                    {
                        id: "bk9",
                        name: "Cheese Veg Combo",
                        price: 269,
                        rating: 4.3,
                        description:
                            "Cheese burger + fries + coke.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/cheese_combo.jpg",
                    },
                ],
            },
            {
                title: "Sides",
                items: [
                    {
                        id: "bk10",
                        name: "French Fries (M)",
                        price: 99,
                        rating: 4.1,
                        description:
                            "Crispy golden french fries.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/fries.jpg",
                    },
                    {
                        id: "bk11",
                        name: "Peri Peri Fries",
                        price: 119,
                        rating: 4.2,
                        description:
                            "Fries seasoned with peri peri spices.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/peri_fries.jpg",
                    },
                    {
                        id: "bk12",
                        name: "Cheesy Dip",
                        price: 39,
                        rating: 4.0,
                        description:
                            "Creamy cheese dip for fries.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/cheese_dip.jpg",
                    },
                ],
            },
            {
                title: "Beverages",
                items: [
                    {
                        id: "bk13",
                        name: "Coke",
                        price: 49,
                        rating: 4.3,
                        description:
                            "Chilled Coca Cola.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/coke.jpg",
                    },
                    {
                        id: "bk14",
                        name: "Chocolate Shake",
                        price: 129,
                        rating: 4.4,
                        description:
                            "Thick chocolate milkshake.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/choco_shake.jpg",
                    },
                    {
                        id: "bk15",
                        name: "Cold Coffee",
                        price: 119,
                        rating: 4.2,
                        description:
                            "Iced cold coffee with cream.",
                        cloudinaryImageId:
                            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/cold_coffee.jpg",
                    },
                ],
            },
        ],
    },

    // r2: KFC
    {
        restaurantId: "671928",
        restaurantName: "KFC",
        rating: 4.2,
        menu: [
            {
                title: "Chicken Buckets",
                items: [
                    {
                        id: "kfc1",
                        name: "Hot & Crispy Bucket (6 pcs)",
                        price: 499,
                        rating: 4.5,
                        description: "6 pieces of signature crispy chicken.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_bucket.jpg"
                    },
                    {
                        id: "kfc2",
                        name: "Peri Peri Chicken Strips",
                        price: 199,
                        rating: 4.3,
                        description: "Juicy chicken strips with peri peri seasoning.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_strips.jpg"
                    },
                    {
                        id: "kfc3",
                        name: "Smoky Red Chicken",
                        price: 219,
                        rating: 4.4,
                        description: "Smoky spicy chicken pieces.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_smoky.jpg"
                    }
                ]
            },
            {
                title: "Burgers",
                items: [
                    {
                        id: "kfc4",
                        name: "Zinger Burger",
                        price: 199,
                        rating: 4.4,
                        description: "Spicy crispy chicken fillet burger.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_zinger.jpg"
                    },
                    {
                        id: "kfc5",
                        name: "Veg Zinger",
                        price: 149,
                        rating: 4.2,
                        description: "Crispy veg patty burger.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_veg.jpg"
                    },
                    {
                        id: "kfc6",
                        name: "Double Zinger",
                        price: 249,
                        rating: 4.5,
                        description: "Double chicken fillet burger.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_double.jpg"
                    }
                ]
            },
            {
                title: "Meals",
                items: [
                    {
                        id: "kfc7",
                        name: "Zinger Meal",
                        price: 299,
                        rating: 4.3,
                        description: "Zinger burger + fries + drink.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_meal.jpg"
                    },
                    {
                        id: "kfc8",
                        name: "Bucket Meal",
                        price: 699,
                        rating: 4.6,
                        description: "Bucket + fries + drinks.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_bucket_meal.jpg"
                    },
                    {
                        id: "kfc9",
                        name: "Chicken Popcorn Meal",
                        price: 249,
                        rating: 4.2,
                        description: "Popcorn chicken + fries + drink.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_popcorn.jpg"
                    }
                ]
            },
            {
                title: "Sides",
                items: [
                    {
                        id: "kfc10",
                        name: "Fries (M)",
                        price: 99,
                        rating: 4.1,
                        description: "Crispy salted fries.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_fries.jpg"
                    },
                    {
                        id: "kfc11",
                        name: "Chicken Popcorn",
                        price: 129,
                        rating: 4.3,
                        description: "Bite-sized crispy chicken.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_pop.jpg"
                    },
                    {
                        id: "kfc12",
                        name: "Cheese Dip",
                        price: 39,
                        rating: 4.0,
                        description: "Creamy cheese dip.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_dip.jpg"
                    }
                ]
            },
            {
                title: "Beverages",
                items: [
                    {
                        id: "kfc13",
                        name: "Pepsi",
                        price: 49,
                        rating: 4.2,
                        description: "Chilled Pepsi.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_pepsi.jpg"
                    },
                    {
                        id: "kfc14",
                        name: "Cold Coffee",
                        price: 119,
                        rating: 4.3,
                        description: "Iced coffee with cream.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_coffee.jpg"
                    },
                    {
                        id: "kfc15",
                        name: "Chocolate Shake",
                        price: 129,
                        rating: 4.4,
                        description: "Thick chocolate shake.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/01/kfc_shake.jpg"
                    }
                ]
            }
        ]
    },

    // r3: McDonald's
    {
        restaurantId: "23678",
        restaurantName: "McDonald's",
        rating: 4.4,
        menu: [
            {
                title: "Burgers",
                items: [
                    {
                        id: "mc1",
                        name: "McAloo Tikki",
                        price: 59,
                        rating: 4.3,
                        description: "Spiced potato patty with fresh veggies.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_aloo.jpg"
                    },
                    {
                        id: "mc2",
                        name: "McVeggie Burger",
                        price: 119,
                        rating: 4.4,
                        description: "Crispy veg patty with mayo and lettuce.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_veggie.jpg"
                    },
                    {
                        id: "mc3",
                        name: "McChicken",
                        price: 129,
                        rating: 4.5,
                        description: "Crispy chicken patty with mayo.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_chicken.jpg"
                    }
                ]
            },
            {
                title: "Meals",
                items: [
                    {
                        id: "mc4",
                        name: "McVeggie Meal",
                        price: 199,
                        rating: 4.4,
                        description: "Burger + fries + coke.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_meal1.jpg"
                    },
                    {
                        id: "mc5",
                        name: "McChicken Meal",
                        price: 229,
                        rating: 4.5,
                        description: "Chicken burger + fries + drink.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_meal2.jpg"
                    },
                    {
                        id: "mc6",
                        name: "McSpicy Meal",
                        price: 249,
                        rating: 4.6,
                        description: "Spicy burger + fries + coke.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_meal3.jpg"
                    }
                ]
            },
            {
                title: "Fries & Sides",
                items: [
                    {
                        id: "mc7",
                        name: "Fries (M)",
                        price: 99,
                        rating: 4.3,
                        description: "Golden crispy fries.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_fries.jpg"
                    },
                    {
                        id: "mc8",
                        name: "McNuggets (6 pcs)",
                        price: 149,
                        rating: 4.5,
                        description: "Crispy chicken nuggets.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_nuggets.jpg"
                    },
                    {
                        id: "mc9",
                        name: "Cheese Dip",
                        price: 39,
                        rating: 4.1,
                        description: "Creamy cheese dip.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_dip.jpg"
                    }
                ]
            },
            {
                title: "Desserts",
                items: [
                    {
                        id: "mc10",
                        name: "McFlurry Oreo",
                        price: 119,
                        rating: 4.6,
                        description: "Soft serve with Oreo crunch.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_flurry.jpg"
                    },
                    {
                        id: "mc11",
                        name: "Hot Fudge Sundae",
                        price: 99,
                        rating: 4.5,
                        description: "Vanilla soft serve with chocolate fudge.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_sundae.jpg"
                    },
                    {
                        id: "mc12",
                        name: "Apple Pie",
                        price: 49,
                        rating: 4.3,
                        description: "Crispy pie filled with apple filling.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_pie.jpg"
                    }
                ]
            },
            {
                title: "Beverages",
                items: [
                    {
                        id: "mc13",
                        name: "Coke",
                        price: 49,
                        rating: 4.3,
                        description: "Chilled Coca Cola.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_coke.jpg"
                    },
                    {
                        id: "mc14",
                        name: "Iced Tea",
                        price: 69,
                        rating: 4.2,
                        description: "Refreshing iced tea.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_tea.jpg"
                    },
                    {
                        id: "mc15",
                        name: "Cold Coffee",
                        price: 119,
                        rating: 4.4,
                        description: "Cold coffee with ice cream.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/02/mc_coffee.jpg"
                    }
                ]
            }
        ]
    },

    // r4: Subway
    {
        restaurantId: "656392",
        restaurantName: "Subway",
        rating: 4.4,
        menu: [
            {
                title: "Signature Subs",
                items: [
                    {
                        id: "sub1",
                        name: "Veggie Delight",
                        price: 189,
                        rating: 4.3,
                        description: "Fresh veggies loaded in toasted bread.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_veg.jpg"
                    },
                    {
                        id: "sub2",
                        name: "Paneer Tikka Sub",
                        price: 229,
                        rating: 4.5,
                        description: "Spicy paneer tikka with sauces.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_paneer.jpg"
                    },
                    {
                        id: "sub3",
                        name: "Chicken Teriyaki",
                        price: 249,
                        rating: 4.6,
                        description: "Chicken chunks glazed in teriyaki sauce.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_teriyaki.jpg"
                    }
                ]
            },
            {
                title: "Wraps",
                items: [
                    {
                        id: "sub4",
                        name: "Veg Wrap",
                        price: 199,
                        rating: 4.2,
                        description: "Veggie filling in soft wrap.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_wrap1.jpg"
                    },
                    {
                        id: "sub5",
                        name: "Paneer Wrap",
                        price: 219,
                        rating: 4.4,
                        description: "Paneer tikka in tortilla wrap.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_wrap2.jpg"
                    },
                    {
                        id: "sub6",
                        name: "Chicken Wrap",
                        price: 239,
                        rating: 4.5,
                        description: "Grilled chicken wrapped fresh.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_wrap3.jpg"
                    }
                ]
            },
            {
                title: "Salads",
                items: [
                    {
                        id: "sub7",
                        name: "Veg Salad",
                        price: 179,
                        rating: 4.2,
                        description: "Fresh chopped vegetables.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_salad1.jpg"
                    },
                    {
                        id: "sub8",
                        name: "Paneer Salad",
                        price: 219,
                        rating: 4.4,
                        description: "Paneer cubes with greens.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_salad2.jpg"
                    },
                    {
                        id: "sub9",
                        name: "Chicken Salad",
                        price: 239,
                        rating: 4.5,
                        description: "Chicken with lettuce & sauces.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_salad3.jpg"
                    }
                ]
            },
            {
                title: "Sides",
                items: [
                    {
                        id: "sub10",
                        name: "Hash Browns",
                        price: 69,
                        rating: 4.3,
                        description: "Crispy potato hash browns.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_hash.jpg"
                    },
                    {
                        id: "sub11",
                        name: "Cookies",
                        price: 49,
                        rating: 4.6,
                        description: "Chocolate chip cookie.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_cookie.jpg"
                    },
                    {
                        id: "sub12",
                        name: "Garlic Bread",
                        price: 89,
                        rating: 4.4,
                        description: "Toasted garlic bread slices.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_bread.jpg"
                    }
                ]
            },
            {
                title: "Beverages",
                items: [
                    {
                        id: "sub13",
                        name: "Pepsi",
                        price: 49,
                        rating: 4.2,
                        description: "Chilled Pepsi.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_pepsi.jpg"
                    },
                    {
                        id: "sub14",
                        name: "Iced Tea",
                        price: 69,
                        rating: 4.3,
                        description: "Refreshing iced tea.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_tea.jpg"
                    },
                    {
                        id: "sub15",
                        name: "Cold Coffee",
                        price: 119,
                        rating: 4.4,
                        description: "Cold coffee with cream.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/03/sub_coffee.jpg"
                    }
                ]
            }
        ]
    },

    // r5: Pizza Hut
    {
        restaurantId: "10582",
        restaurantName: "Pizza Hut",
        rating: 4.2,
        menu: [
            {
                title: "Veg Pizzas",
                items: [
                    {
                        id: "ph1",
                        name: "Margherita",
                        price: 199,
                        rating: 4.3,
                        description: "Classic cheese & tomato pizza.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_margherita.jpg"
                    },
                    {
                        id: "ph2",
                        name: "Farmhouse",
                        price: 299,
                        rating: 4.5,
                        description: "Loaded with fresh veggies.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_farmhouse.jpg"
                    },
                    {
                        id: "ph3",
                        name: "Paneer Supreme",
                        price: 349,
                        rating: 4.4,
                        description: "Paneer cubes with capsicum & onions.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_paneer.jpg"
                    }
                ]
            },
            {
                title: "Non-Veg Pizzas",
                items: [
                    {
                        id: "ph4",
                        name: "Chicken Supreme",
                        price: 399,
                        rating: 4.6,
                        description: "Loaded with chicken chunks.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_chicken.jpg"
                    },
                    {
                        id: "ph5",
                        name: "Pepperoni",
                        price: 429,
                        rating: 4.7,
                        description: "Classic pepperoni slices.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_pepperoni.jpg"
                    },
                    {
                        id: "ph6",
                        name: "Chicken Tikka",
                        price: 379,
                        rating: 4.5,
                        description: "Indian style tikka pizza.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_tikka.jpg"
                    }
                ]
            },
            {
                title: "Sides",
                items: [
                    {
                        id: "ph7",
                        name: "Garlic Bread",
                        price: 119,
                        rating: 4.4,
                        description: "Toasted garlic bread.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_garlic.jpg"
                    },
                    {
                        id: "ph8",
                        name: "Cheese Sticks",
                        price: 149,
                        rating: 4.5,
                        description: "Mozzarella cheese sticks.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_cheese.jpg"
                    },
                    {
                        id: "ph9",
                        name: "Chicken Wings",
                        price: 199,
                        rating: 4.6,
                        description: "Spicy grilled wings.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_wings.jpg"
                    }
                ]
            },
            {
                title: "Desserts",
                items: [
                    {
                        id: "ph10",
                        name: "Choco Lava Cake",
                        price: 99,
                        rating: 4.6,
                        description: "Warm cake with molten chocolate.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_lava.jpg"
                    },
                    {
                        id: "ph11",
                        name: "Brownie",
                        price: 89,
                        rating: 4.4,
                        description: "Chocolate fudge brownie.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_brownie.jpg"
                    },
                    {
                        id: "ph12",
                        name: "Ice Cream Cup",
                        price: 79,
                        rating: 4.3,
                        description: "Vanilla ice cream.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_icecream.jpg"
                    }
                ]
            },
            {
                title: "Beverages",
                items: [
                    {
                        id: "ph13",
                        name: "Pepsi",
                        price: 49,
                        rating: 4.2,
                        description: "Chilled Pepsi.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_pepsi.jpg"
                    },
                    {
                        id: "ph14",
                        name: "7Up",
                        price: 49,
                        rating: 4.1,
                        description: "Refreshing lemon drink.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_7up.jpg"
                    },
                    {
                        id: "ph15",
                        name: "Cold Coffee",
                        price: 119,
                        rating: 4.5,
                        description: "Iced coffee delight.",
                        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/12/04/ph_coffee.jpg"
                    }
                ]
            }
        ]
    },

    // r6: Wow Momo
    // r7: Theobroma
    // r8: California Burrito
    // r9: La Pinoz
    // r10: Salad Days
];

export default restaurantsMenuMock;