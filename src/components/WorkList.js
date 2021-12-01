import React, { useState } from "react";
import { WorkItem } from "./WorkItem";
import { data } from "../Data";

export const WorkList = () => {
  const [viewState, setViewState] = useState(6);

  const list = [];
  for (let i = 0; i < viewState; i++) {
    list.push(<WorkItem data={data[i]} />);
  }

  return (
    <div className="bg-gray-800 py-4">
      <h1 className="px-4 text-4xl font-bold text-yellow-400 py-4">
        Projects.
      </h1>
      <div className="grid grid-cols-1 gap-5">{list}</div>
      {viewState !== 10 && (
        <div className="flex w-full items-center justify-center">
          <button
            className="border-2 border-yellow-500 text-yellow-500 py-2 px-5 m-2 rounded transition-all transform hover:shadow hover:-translate-y-2"
            onClick={() => setViewState(10)}
          >
            View More
          </button>
        </div>
      )}
      {viewState === 10 && (
        <div className="flex w-full items-center justify-center">
          <button
            className="border-2 border-yellow-500 text-yellow-500 py-2 px-5 m-2 rounded transition transform hover:scale-95"
            onClick={() => setViewState(6)}
          >
            Close Extra
          </button>
        </div>
      )}
    </div>
  );
};
