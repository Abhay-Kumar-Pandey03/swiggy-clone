import { lazy, Suspense , useState, useEffect} from 'react';
import Shimmer from './components/Shimmer';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {Provider} from "react-redux";
import '../index.css';

import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/temp';
import appStore from "./utils/appStore";
import Cart from './components/Cart';

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {

    const [user, setUser] = useState("");

    useEffect( () => {
        //API Call
        const data = {
            name: "Ashish"
        }

        setUser(data.namee);
    }, []);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: user, setUser }}>
            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}>
                    <Grocery />
                </Suspense>,
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}>
                    <About />
                </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />,
    },

    {
        path: "*",
        element: <h1>404 Not Found</h1>,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);