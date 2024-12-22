import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresID from "../Components/GamesByGenresID";

export default function Home() {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenres, setGameListByGenre] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreID(4);
  }, []);

  const getAllGamesList = () => {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results);
    });
  };

  const getGameListByGenreID = (id) => {
    GlobalAPI.getGameListByGenreID(id).then((resp) => {
      setGameListByGenre(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-6 p-4">
      <div className="hidden md:block">
        <GenreList
          genreId={(genreId) => {
            getGameListByGenreID(genreId);
          }}
          selectedGenreName={(name) => setSelectedGenreName(name)}
        />
      </div>

      <div className="col-span-6 md:col-span-5 overflow-y-auto">
        {allGamesList?.length > 0 && gameListByGenres?.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenresID
              gameList={gameListByGenres}
              name={selectedGenreName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
