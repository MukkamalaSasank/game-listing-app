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
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            {
              setActiveIndex(index);
              genreId(item.id);
              selectedGenreName(item.name);
            }
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg dark:hover:bg-gray-700 group lg:w-[300px]
            ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-in-out duration-300 
                ${activeIndex == index ? "scale-110" : null}`}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-in-out duration-300 
            ${activeIndex == index ? "font-bold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
