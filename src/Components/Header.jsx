import React, { useContext, useState } from "react";
import logo from "../assets/Images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />

      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          className="px-2 bg-transparent outline-none"
          placeholder="Search for Games"
        />
      </div>

      <div>
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
    </div>
  );
}
