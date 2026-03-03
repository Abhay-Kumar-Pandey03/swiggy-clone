const Shimmer = () => {
    return (
        <div className="px-6 md:px-16 py-10 bg-gray-50 min-h-screen">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                
                {Array(12).fill("").map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"
                    >
                        {/* Image Skeleton */}
                        <div className="w-full h-44 bg-gray-300"></div>

                        {/* Text Skeleton */}
                        <div className="p-4 space-y-3">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-300 rounded w-full"></div>
                            <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Shimmer;