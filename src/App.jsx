import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import GameInfoPage from "./Pages/GameInfoPage"; // Import the GameInfoPage
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={`${theme} 
          ${theme === "dark" ? "bg-gray-950" : null} h-full p-8`}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/game-info" element={<GameInfoPage />} /> {/* GameInfoPage route */}
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;