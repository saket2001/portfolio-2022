import React from "react";

export const ProgressBar = ({ label, size }) => {
  return (
    <>
      <p>{label}</p>
      <div className="w-full h-4 rounded-md bg-gray-400">
        <div className={`${size} h-4 rounded-md bg-yellow-400`}></div>
      </div>
    </>
  );
};
