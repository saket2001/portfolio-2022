import React from "react";
import { SkillTag } from "./SkillTag";
import { ProgressBar } from "./ProgressBar";
import myImage from "../images/myimage.jpeg";

export const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-2 lg:gap-5 min-w-screen min-h-screen text-gray-300 p-5 lg:py-5 py-3">
      {/* image with skills */}
      <div className="p-4 flex flex-col gap-2">
        {/* image */}
        <div className="w-full h-1/3 lg:w-4/5 bg-gray-400 rounded">
          <img src={myImage} alt="profile" className="w-full h-full rounded" />
        </div>

        {/* skills */}
        <h2 className="text-2xl font-bold text-yellow-400 mt-5 mb-2">
          Skills.
        </h2>
        <div className="w-4/5 grid grid-cols-1 gap-2 text-base">
          <div className="w-full grid grid-cols-2 items-center gap-2">
            <ProgressBar label="HTML" size="w-4/5" />
          </div>
          <div className="w-full grid grid-cols-2 items-center gap-2">
            <ProgressBar label="CSS" size="w-4/5" />
          </div>
          <div className="w-full grid grid-cols-2 items-center gap-2">
            <ProgressBar label="Javascript" size="w-2/3" />
          </div>
          <div className="w-full grid grid-cols-2 items-center gap-2">
            <ProgressBar label="React Js" size="w-4/5" />
          </div>
          <div className="w-full grid grid-cols-2 items-center gap-2">
            <ProgressBar label="Node Js" size="w-1/2" />
          </div>
          <div className="w-full grid grid-cols-2 items-center gap-2">
            <ProgressBar label="Database" size="w-2/3" />
          </div>
        </div>

        {/* other skills */}
        <h2 className="text-2xl font-bold text-yellow-400 mt-5 mb-2">
          Other skills.
        </h2>
        <div className="flex items-center gap-3 px-2">
          <SkillTag option={1} />
          <SkillTag option={2} />
          <SkillTag option={3} />
        </div>

        {/* hobbies */}
        <h2 className="text-2xl font-bold text-yellow-400 mt-5 mb-2">
          Interests.
        </h2>
        <div className="flex items-center gap-3 px-2">
          <SkillTag option={4} />
          <SkillTag option={5} />
          <SkillTag option={6} />
          <SkillTag option={7} />
        </div>
      </div>
      {/* about me info */}
      <div className="p-4">
        <h2 className="text-5xl font-bold text-yellow-400 mb-4">About me.</h2>
        <p className="text-lg font-medium text-gray-200 mb-1 mt-4">
          Saket Chandorkar
        </p>
        <p className="text-base mt-3">Frontend Web Developer</p>
        <p className="text-base mb-1">20 years old</p>
        <p className="text-base mb-1 mt-4 w-4/5">
          <span className="font-semibold mr-1 text-gray-200">Hello!</span>
          I'm an enthusiastic frontend web developer. I'm currently pursing my
          bachelor's degree in information technology engineering from pillai
          college of engineering.
        </p>
        <p className="text-base mb-1 mt-4 w-4/5">
          As a developer I offer skills like being a team player, fast leaner,
          determination, dedicated, time management and also a team leader.
        </p>
        <h2 className="text-2xl font-bold text-yellow-400 mt-5 mb-2">
          Experience.
        </h2>
        <div className=" grid grid-rows-2 text-base gap-2">
          {/* row 1 */}
          <div className="border border-gray-200 grid grid-cols-2 rounded-lg p-3">
            <p className="border-r mr-3">
              Intern Web Developer
              <br />
              <span className="text-sm text-yellow-300">June - July 2021</span>
            </p>
            <p>
              Completed internship by doing 4 tasks of HTML & CSS. Worked as
              team leader for 3 weeks where coordinated new interns in their
              tasks.
              <br />
              <span className="text-sm text-gray-400">
                Learnovate E-commerce
              </span>
            </p>
          </div>
          {/* row 2 */}
          <div className="border border-gray-200 grid grid-cols-2 rounded-lg p-3">
            <p className="border-r mr-3">
              Intern Web Developer
              <br />
              <span className="text-sm text-yellow-300">June - July 2021</span>
            </p>
            <p>
              Here i created a simple flask web banking application with
              features like check balance, transfer money to other users.
              <br />
              <span className="text-sm text-gray-400">Sparks Foundation</span>
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-yellow-400 mt-5 mb-2">
          Contact.
        </h2>
        <div className="grid grid-rows-2 gap-4 my-2">
          <p className="flex gap-3 items-center">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <a
              href="mailto:saketchandorkar123@gmail.com"
              className="text-gray-300 text-base"
            >
              saketchandorkar123@gmail.com
            </a>
          </p>
          <p className="flex gap-3 items-center">
            <i class="fa fa-phone-alt" aria-hidden="true"></i>
            <a href="tel:+917506553715" className="text-gray-300 text-base">
              +91 7506553715
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
