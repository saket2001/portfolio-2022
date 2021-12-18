import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import { gsap, Power3 } from "gsap";

export const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navbar = useRef();
  const nav = useRef();

  // animation logic
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(navbar.current, {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: Power3.easeOut,
    }).from(nav.current, {
      duration: 0.5,
      opacity: 0,
      y: -100,
      yoyo: true,
      ease: Power3.easeOut,
    });
  });

  return (
    <>
      <nav
        className="navbar bg-gray-800 w-full p-4 flex justify-between"
        ref={navbar}
      >
        <a href="/" className="text-xl font-bold md:text-2xl text-gray-300">
          Saket Chandorkar
        </a>

        {/* desktop navbar */}
        <div className="hidden px-2 md:flex text-lg text-blue-300">
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
            <a
              href="My_Resume.pdf"
              className="text-yellow-400 border border-yellow-400 rounded-md p-2 transition-all hover:bg-yellow-400 hover:text-gray-900"
              download="saket-chandorkar-resume"
            >
              Download Resume
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
        <div
          className="nav bg-gray-800 w-full p-6 flex flex-col gap-2 justify-center align-center z-20"
          ref={nav}
        >
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
          <div className="p-1 my-1 text-center">
            <a
              href="My_Resume.pdf"
              className="text-yellow-400 border border-yellow-400 rounded-md p-2 hover:bg-yellow-400 hover:text-gray-900"
              download="saket-chandorkar-resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
};
