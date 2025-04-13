import React from "react";
import image from "../components/image.png";

function UserSelector() {
  return (
    <div className="w-full max-w-[65rem] h-auto mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-yellow-200 via-orange-100 to-red-200 rounded-3xl shadow-2xl overflow-hidden border-4 border-brown-500 relative p-6">
      
      <div className="flex flex-col justify-center items-center px-6 py-8 lg:p-12">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-brown-800 via-orange-600 to-yellow-500 drop-shadow-2xl"
          style={{
            animation: "glow 2s infinite",
            textShadow: "0 0 0px #ff8c00, 0 0 0px #ff8c00, 0 0 0px #ff4500",
          }}
        >
          LIBRARY ACCESS
        </h1>
        <style>
          {`
            @keyframes glow {
              0%, 100% {
                text-shadow: 0 0 0px #ff8c00, 0 0 0px #ffa500, 0 0 0px #ff4500;
              }
              50% {
                text-shadow: 0 0 0px #ffd700, 0 0 0px #ff8c00, 0 0 0px #ff4500;
              }
            }
          `}
        </style>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10">
          <button className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white font-bold text-xl sm:text-2xl shadow-xl hover:shadow-2xl transform transition-all duration-500 ease-in-out border-4 border-red-500 hover:scale-110 hover:rotate-3">
            Librarian
          </button>
          <button className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold text-xl sm:text-2xl shadow-xl hover:shadow-2xl transform transition-all duration-500 ease-in-out border-4 border-yellow-500 hover:scale-110 hover:-rotate-3">
            Student
          </button>
        </div>
      </div>

      <div className="mt-10 lg:mt-0 relative w-full max-w-[32rem] h-[20rem] sm:h-[30rem] md:h-[35rem] rounded-3xl shadow-2xl overflow-hidden">
        <img
          src={image}
          alt="Library"
          className="w-full h-full object-fill transform hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>

      <div className="absolute top-4 right-5 translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 shadow-xl animate-bounce flex items-center justify-center text-xl sm:text-2xl">
        📚
      </div>

      <div className="absolute bottom-3 left-6 -translate-x-1/2 translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-xl animate-bounce flex items-center justify-center text-xl sm:text-2xl">
        📖
      </div>
    </div>
  );
}

export default UserSelector;
