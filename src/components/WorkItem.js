import React, { useState, useRef, useEffect } from "react";
import { TagSelector } from "./TagSelector";
import { gsap, Power3, ScrollTrigger } from "gsap/all";

export const WorkItem = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const imgItem = useRef();
  const imgText = useRef();
  const infoText = useRef();
  gsap.registerPlugin(ScrollTrigger);

  // animation logic
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imgItem.current,
      {
        opacity: 0,
        scale: 0.85,
        x: -300,
      },
      {
        scrollTrigger: {
          trigger: imgItem.current,
          start: "top center",
        },
        duration: 1,
        opacity: 1,
        scale: 0.95,
        x: 0,
        ease: Power3.easeInOut,
        delay: 0.1,
      }
    ).fromTo(
      imgText.current,
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: imgText.current,
          start: "top center",
        },
        duration: 1,
        opacity: 1,
        ease: Power3.easeOut,
      }
    );
  }, []);

  // gsap.from(infoText.current, {
  //   duration: 1,
  //   delay: 0.2,
  //   x: 300,
  //   opacity: 0,
  //   height: 0,
  //   ease: Power3.easeIn,
  // });

  const classes = isClicked
    ? `md:self-start m-2 w-4/5 h-full md:w-3/4 md:h-3/4 lg:w-4/5 lg:h-5/6 rounded-lg filter brightness-50 blur-sm lg:absolute z-0 cursor-pointer info transition-all transform hover:shadow-xl hover:scale-95`
    : `md:self-start m-2 w-4/5 h-4/5 md:w-3/4 md:h-3/4 lg:w-4/5 lg:h-5/6 rounded-lg filter brightness-90 lg:absolute z-0 cursor-pointer transition-all transform hover:shadow-xxl hover:scale-95`;

  return (
    <div className="work-item min-w-full h-full lg:h-screen flex flex-col items-center lg:items-end relative py-2 z-0 md:m-0 mx-3 my-5">
      <img
        src={data?.image}
        className={classes}
        alt="project"
        ref={imgItem}
        onClick={() => {
          setIsClicked((prevValue) => !prevValue);
        }}
      />
      {!isClicked && (
        <h1
          className="heading text-2xl lg:text-6xl font-bold text-yellow-400 z-0 flex md:self-end md:justify-self-end my-1 md:mx-5 p-2 relative md:absolute md:bottom-0 md:right-0 cursor-pointer"
          ref={imgText}
          onClick={() => {
            setIsClicked((prevValue) => !prevValue);
          }}
        >
          {data?.title}
        </h1>
      )}
      {/* info box */}
      {isClicked && (
        <div
          className="w-4/5 md:w-2/5 lg:py-12 py-8 p-3 z-10 m-auto md:mx-5 self-end justify-self-end flex flex-col text-gray-300 bg-gray-900 rounded-md shadow-md"
          ref={infoText}
        >
          {/* close icon */}
          <div
            className="w-full flex justify-self-start items-center justify-end px-2"
            onClick={() => {
              setIsClicked((prevValue) => !prevValue);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer transition-transform  transform hover:scale-95"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {/* heading */}
          <h1 className="py-2 px-3 mb-1 text-2xl font-bold">{data?.title}</h1>
          {/* tags */}
          <div className="w-full lg:w-4/5 px-3 mb-1 grid lg:grid-cols-2 grid-cols-1 gap-2">
            {data?.tags.map((t) => (
              <TagSelector tagName={t} />
            ))}
          </div>
          {/* description */}
          <p className="py-2 px-3 text-gray-400 text-base">
            {data?.description}
          </p>
          {/* site link button */}
          <button className="lg:w-1/2 border-2 border-gray-400 py-1 px-3 m-3 rounded transition-all transform hover:scale-95">
            <a
              href={data?.link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 text-lg"
            >
              View Live Site
            </a>
          </button>
        </div>
      )}
    </div>
  );
};
