import React from 'react';
import { BsNintendoSwitch, BsAndroid2, BsFillPhoneFill } from "react-icons/bs";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaGamepad,
} from "react-icons/fa6";
import { SiWii } from "react-icons/si";
import { useLocation } from 'react-router-dom';

export default function GameInfoPage() {
  const location = useLocation();
  const { gamesList, searchTerm } = location.state || { gamesList: [], searchTerm: '' }; // Get the gamesList from location state

  const platformIcons = {
    pc: <FaWindows />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    nintendo: <BsNintendoSwitch />,
    web: <FaWindows />,
    ios: <BsFillPhoneFill />,
    android: <BsAndroid2 />,
    macos: <FaApple />,
    linux: <FaLinux />,
    ps: <FaGamepad />,
    wii: <SiWii />,
  };
  

  return (
      <div>
        <h2 className="text-[3vh] dark:text-white font-bold mt-5">
          Results for {searchTerm}
        </h2>
  
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5 pt-5">
          {gamesList.map((game) => {
            const renderedPlatforms = [];
  
            return (
              <div
                key={game.id} // Add unique key for the outer map
                className="bg-gray-800 group rounded-3xl hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-[250px] rounded-tr-3xl rounded-tl-3xl object-cover"
                />
                <div className="p-4">
                  <div>
                    <h2 className="text-white text-2xl font-bold">{game.name}</h2>
                  </div>
                  <div className="flex flex-wrap space-x-2 mt-2">
                    {game.platforms ? game.platforms.map((item) => {
                      const icon = item.platform.slug
                        .replace(/[0-9]/g, "")
                        .split("-")[0];
                      const platformIcon = platformIcons[icon];
  
                      if (!renderedPlatforms.includes(icon)) {
                        renderedPlatforms.push(icon);
                        return (
                          <span
                            key={item.platform.id}
                            className="text-white text-xl mt-1"
                          >
                            {platformIcon || <FaGamepad />}{" "}
                            {/* Default icon for unknown platforms */}
                          </span>
                        );
                      }
  
                      return null; // Don't render duplicates
                    }): null}
                  </div>
                  <div className="flex items-center mt-5">
                    <span className="text-green-500 border border-green-500 p-1 mr-2 font-bold rounded-xl">
                      {game.rating}
                    </span>
                    <span className="text-gray-400">
                      {game.metacritic && `Metacritic: ${game.metacritic}`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}