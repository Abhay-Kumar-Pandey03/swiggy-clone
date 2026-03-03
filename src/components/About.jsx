import User from "./User";
import { Component } from "react";
import UserContext from "../utils/temp";


class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">

                {/* Page Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    About Us Page
                </h1>

                {/* Description Section */}
                <p className="max-w-2xl text-center text-gray-600 mb-10 leading-relaxed">
                    Welcome to our food ordering platform. We aim to deliver
                    delicious meals from your favorite restaurants directly
                    to your doorstep with speed and convenience.
                </p>

                <div> <UserContext.Consumer >
                    {(data) => <h3>{data.loggedInUser}</h3>}
                </UserContext.Consumer > </div>

                {/* User Card Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md hover:shadow-2xl transition duration-300">
                    <User 
                        name="Jane Doe" 
                        email="jane.doe@example.com" 
                        location="Los Angeles" 
                    />
                </div>

            </div>
        );
    }
}

export default About;