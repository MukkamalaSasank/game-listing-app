import React, { useEffect, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";

export default function GenreList({ genreId, selectedGenreName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    GlobalAPI.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-4xl font-bold dark:text-white">Genres</h2>
      {genreList.map((item, index) => (
        <div
          key={item.id}
          onClick={() => {
            {
              setActiveIndex(index);
              genreId(item.id);
              selectedGenreName(item.name);
            }
          }}
          className={`flex gap-2 items-center mb-2 mt-2 cursor-pointer hover:bg-gray-300 p-2 hover:font-bold rounded-lg dark:hover:bg-gray-600 group lg:w-[300px]
            ${activeIndex == index ? "bg-gray-300 dark:bg-gray-500" : null}`}
        >
          <img
            src={item.image_background}
            className={`w-[45px] h-[45px] object-cover rounded-lg group-hover:scale-110 transition-all ease-in-out duration-300 
                ${activeIndex == index ? "scale-110" : null}`}
          />
          <h3
            className={`dark:text-white text-[20px] ml-3 group transition-all ease-in-out duration-300 
            ${activeIndex == index ? "font-bold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
