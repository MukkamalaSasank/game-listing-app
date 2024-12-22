import React from "react";

export default function GamesByGenresID({ gameList, name }) {
  return (
    <div>
      <h2 className="text-[30px] dark:text-white font-bold mt-5">
        Popular {name} Games
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5">
        {gameList.map((item) => (
          <div className="bg-[#76a8f75e] p-5 rounded-lg pb-12 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <div>
              <h2 className="text-[2vh] dark:text-white font-bold">
                {item.name}
                <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                  {item.metacritic}
                </span>
              </h2>
              <h2 className="text-[1.5vh] text-gray-500 dark:text-gray-300 font-bold mt-3">
                ⭐{item.rating}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;💬{item.reviews_count}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔥{item.suggestions_count}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
