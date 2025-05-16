//import { useState } from 'react'
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Lore from "./components/Lore";
import './App.css'
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { empyreanTheme } from "./theme";

function App() {


  return (
    <ThemeProvider theme={empyreanTheme}>
      
      <div>
        <header>
          <h1>⚔️Empyrean Archive🐉</h1>
        </header>
        <div>
          <nav>
            <NavBar />
          </nav>
        </div>
        <main>
          <Outlet></Outlet>
        </main>
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