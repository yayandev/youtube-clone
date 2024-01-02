import React from "react";

const SkeletonWatchVideo = () => {
  return (
    <div className="w-full flex gap-5 sm:flex-row flex-col">
      <div className="w-full flex-1 p-3">
        <div className="w-full h-48 bg-gray-300" alt="" />
        <div className="w-full flex gap-2 p-2">
          <div className="h-10 w-10 rounded-full bg-gray-300" alt="" />
          <div className="space-y-2 w-full">
            <div className="p-2 w-full bg-gray-300"></div>
            <div className="p-2 w-full bg-gray-300"></div>
            <div className="p-2 w-full bg-gray-300"></div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-72 space-y-3 p-3">
        <div className="w-full">
          <div className="w-full h-20 bg-gray-300" alt="" />
          <div className="w-full flex gap-2 p-2">
            <div className="h-10 w-10 rounded-full bg-gray-300" alt="" />
            <div className="space-y-2 w-full">
              <div className="p-2 w-full bg-gray-300"></div>
              <div className="p-2 w-full bg-gray-300"></div>
              <div className="p-2 w-full bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-20 bg-gray-300" alt="" />
          <div className="w-full flex gap-2 p-2">
            <div className="h-10 w-10 rounded-full bg-gray-300" alt="" />
            <div className="space-y-2 w-full">
              <div className="p-2 w-full bg-gray-300"></div>
              <div className="p-2 w-full bg-gray-300"></div>
              <div className="p-2 w-full bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-20 bg-gray-300" alt="" />
          <div className="w-full flex gap-2 p-2">
            <div className="h-10 w-10 rounded-full bg-gray-300" alt="" />
            <div className="space-y-2 w-full">
              <div className="p-2 w-full bg-gray-300"></div>
              <div className="p-2 w-full bg-gray-300"></div>
              <div className="p-2 w-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonWatchVideo;
