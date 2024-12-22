import axios from "axios";

const key = "65efd168c2784f3e844b179979f77fc5";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreID = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default { getGenreList, getAllGames, getGameListByGenreID };
