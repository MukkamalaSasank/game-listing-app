import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import {
  HiOutlineMagnifyingGlass,
  HiMoon,
  HiSun,
  HiUser,
} from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
import GlobalAPI from "../Services/GlobalAPI";

export default function Header({ searchedGame }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const onSubmit = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      let slug = searchTerm.split(" ").join("-").toLowerCase();
      if (slug.length > 2) {
        try {
          const response = await GlobalAPI.getSearchedGame(slug);
          const results = response.data.results;

          if (results.length > 0) {
            navigate("/game-info", {
              state: { gamesList: results, searchTerm: searchTerm },
            });
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    }
  };

  return (
    <div className="flex items-center">
      <Link to="/">
        {" "}
        {/* Wrap the logo in a Link component */}
        <img src={logo} width={80} height={80} alt="Logo" />
      </Link>

      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 ml-10 rounded-full">
        <HiOutlineMagnifyingGlass className="text-2xl ml-3"/>
        <form className="flex">
          <input
            type="text"
            className="px-5 font-extrabold text-xl bg-transparent outline-none"
            placeholder="Search for Games"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={onSubmit}
          />
        </form>
      </div>

      <div className="m-3">
        {theme == "light" ? (
          <HiMoon
            className="text-[40px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[40px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>

      <div className="m-3">
        <HiUser
          className="text-[40px] m-2 bg-slate-200 text-black p-2 rounded-full cursor-pointer"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
