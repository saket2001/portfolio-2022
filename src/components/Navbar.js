import React, { useState } from "react";
import "../App.css";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="navbar bg-gray-800 fixed w-full p-4 flex justify-between shadow-lg">
        <h1 className="text-xl font-bold md:text-2xl text-gray-300">
          Portfolio 2022
        </h1>

        {/* desktop navbar */}
        <div className="hidden px-2 md:flex text-lg text-blue-300">
          <div className="p-1 mx-1">
            <a href="/" className="text-gray-300">
              Home
            </a>
          </div>
          <div className="p-1 mx-1">
            <a href="#about_me" className="text-gray-300">
              About Me
            </a>
          </div>
          <div className="p-1 mx-1">
            <a href="#projects" className="text-gray-300">
              My Projects
            </a>
          </div>
          <div className="p-1 mx-1">
            <a href="/" className="text-gray-300">
              Contact Me
            </a>
          </div>
        </div>

        {/* button */}
        <button
          className="md:hidden p-1 px-2 rounded-lg hover:bg-gray-700 hover:text-white"
          onClick={() => setShowNav((value) => !value)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      {/* mobile navbar */}
      {showNav && (
        <div className="nav bg-gray-700 w-full p-6 flex flex-col justify-center align-center z-20">
          <div className="p-1 my-1 text-center hover:bg-gray-700">
            <a href="http://" className="text-gray-300 text-2xl">
              Home
            </a>
          </div>
          <div className="p-1 my-1 text-center hover:bg-gray-700">
            <a href="#about_me" className="text-gray-300 text-2xl">
              About Me
            </a>
          </div>
          <div className="p-1 my-1 text-center hover:bg-gray-700">
            <a href="#projects" className="text-gray-300 text-2xl">
              My Projects
            </a>
          </div>
          <div className="p-1 my-1 text-center hover:bg-gray-700">
            <a href="#home" className="text-gray-300 text-2xl">
              Contact Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};
