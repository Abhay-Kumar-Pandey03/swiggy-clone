import React from 'react';

const User = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm mx-auto text-center hover:shadow-2xl transition duration-300">

            {/* Profile Image */}
            <div className="w-24 h-24 mx-auto mb-4">
                <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="profile"
                    className="w-full h-full object-cover rounded-full border-4 border-orange-400"
                />
            </div>

            {/* User Info */}
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
                John Doe
            </h2>

            <p className="text-gray-600 text-sm mb-2">
                john.doe@example.com
            </p>

            <p className="text-gray-500 text-sm">
                📍 New York
            </p>

        </div>
    );
};

export default User;