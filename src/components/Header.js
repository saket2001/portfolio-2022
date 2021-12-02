import React from "react";

export const Header = () => {
  return (
    <div className="px-1 lg:px-12 py-4 grid grid-cols-1 place-items-center min-w-screen min-h-screen max-h-screen bg-gray-800">
      <h1 className="main__heading text-yellow-300">
        Port
        <span className="stroke_heading">Folio</span>
        <span className="text-gray-300 text-xl lg:text-5xl mx-2 line-through">
          2022
        </span>
      </h1>
      <div className="flex lg:flex-row flex-col items-center gap-3 lg:justify-between mb-2 ">
        <h3 className="text-gray-300 text-center text-base lg:text-xl mx-2 px-6">
          Frontend Web Developer | UI Designer
        </h3>
        <div className="flex gap-4 px-4">
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
