const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Contact Us
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 mb-10 text-center max-w-xl">
                Have questions or feedback? We'd love to hear from you.
                Fill out the form below and we’ll get back to you as soon as possible.
            </p>

            {/* Contact Form */}
            <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">

                <form className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Write your message..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-300 shadow-md"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </div>
    );
};

export default Contact;