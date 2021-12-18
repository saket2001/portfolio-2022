import React, { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap/all";

export const Header = () => {
  const textItem = useRef();
  const infoBoard1 = useRef();
  const infoBoard2 = useRef();

  useEffect(() => {
    // typewriter effect
    let tl = new gsap.timeline();

    // tl.fromTo(
    //   textItem.current,
    //   8,
    //   {
    //     width: "0",
    //   },
    //   {
    //     width: "20.18em",
    //     ease: SteppedEase.config(37),
    //     delay: 2,
    //   },
    //   0
    // );

    tl.fromTo(
      textItem.current,
      {
        opacity: 0,
        y: -100,
      },
      { duration: 1.5, opacity: 1, y: 0, ease: Power3.easeInOut, delay: 0.4 }
    )
      .from(infoBoard1.current, {
        duration: 0.8,
        opacity: 0,
        x: -500,
        ease: Power3.easeOut,
      })
      .from(infoBoard2.current, {
        duration: 0.8,
        opacity: 0,
        x: 500,
        ease: Power3.easeOut,
      });
  }, []);

  return (
    <div className="px-1 lg:px-12 py-4 grid grid-cols-1 place-items-center min-w-screen min-h-screen max-h-screen bg-gray-800">
      <h1 className="line-1 main__heading text-yellow-400 w-0" ref={textItem}>
        Port
        <span className="stroke_heading">Folio</span>
        <span className="text-gray-300 text-xl lg:text-5xl mx-2">2022</span>
      </h1>
      <div className="flex lg:flex-row flex-col items-center gap-3 lg:justify-between mb-2">
        <h3
          className="text-gray-300 text-center text-base lg:text-xl mx-2 px-6"
          ref={infoBoard1}
        >
          Web Developer | UI Designer | IT Student
        </h3>
        <div className="flex gap-4 px-4" ref={infoBoard2}>
          <a
            href="https://github.com/saket2001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-2xl transform transition-all hover:scale-95"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/saket-chandorkar-856783203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-2xl transform transition-all hover:scale-95"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://dribbble.com/saketc_2001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-2xl transform transition-all hover:scale-95"
          >
            <i class="fab fa-dribbble"></i>
          </a>
          <a
            href="mailto:saketchandorkar123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-2xl transform transition-all hover:scale-95"
          >
            <i class="far fa-envelope"></i>
          </a>
          <a
            href="tel:+917506553715"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-2xl transform transition-all hover:scale-95"
          >
            <i class="fas fa-phone-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
