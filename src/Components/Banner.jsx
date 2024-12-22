import React from "react";

export default function Banner({ gameBanner }) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-1 rounded-lg">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        className="md:h-[500px] w-full object-cover object-top rounded-xl"
      />
    </div>
  );
}
