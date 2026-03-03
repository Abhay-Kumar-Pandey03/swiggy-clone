import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 text-center">

            {/* Error Code */}
            <h1 className="text-7xl font-extrabold text-orange-500 mb-4">
                {err?.status || "404"}
            </h1>

            {/* Title */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Oops! Something went wrong.
            </h2>

            {/* Error Message */}
            <p className="text-gray-600 max-w-md mb-8">
                {err?.statusText || err?.message || "The page you are looking for does not exist."}
            </p>

            {/* Home Button */}
            <Link
                to="/"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition duration-300 shadow-md"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default Error;