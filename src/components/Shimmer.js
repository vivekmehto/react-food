import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap w-[90%] m-auto">
      {Array(12)
        .fill("")
        .map(() => (
          <div className="w-[320px] rounded-md p-4 m-2">
            <div className=" h-48 rounded-lg bg-gray-300"></div>
            <div className="h-4 py-2 my-2 bg-gray-200 "></div>
            <div className="h-3 bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
