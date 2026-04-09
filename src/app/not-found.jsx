import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      
      {/* Big 404 */}
      <h1 className="text-8xl font-extrabold drop-shadow-lg">404</h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-center">
        Oops! Page Not Found
      </h2>

      <p className="mt-2 text-center max-w-md text-gray-200">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          ⬅ Back to Home
        </button>
      </Link>

      {/* Extra Design Circle */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
    </div>
  );
};

export default NotFound;