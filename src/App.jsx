//import { useState } from 'react'
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Characters from "./components/Characters";
import './App.css'
import NavBar from "./components/NavBar.jsx";
import { ThemeProvider } from "styled-components";
import { empyreanTheme } from "./theme";
import dragonIcon1 from "./assets/icons/dragon_icon1.png";
import dragonIcon2 from "./assets/icons/dragon_icon2.png";
import Path from "./styledComponents/Path.jsx";

function App() {


  return (
    <ThemeProvider theme={empyreanTheme}>
      <div>
        <header className="header">
          <img src={dragonIcon2} alt="dragon icon" className="dragon-icon" />
          <h1 className="pageTitle">Empyrean Archive</h1>
          <img src={dragonIcon1} alt="dragon icon" className="dragon-icon" />
        </header>
        <div>
          <nav>
            <NavBar />
          </nav>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 2rem",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <Path />
          <main>
            <Outlet />
          </main>
        </div>
        <footer>Created by Isa 🧚💻</footer>
      </div>
    </ThemeProvider>
  );
  
}

export default App

// return (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/caharcters" element={<Characters />} />
//     <Route path="/lore" element={<Lore />} />
//   </Routes>
// );