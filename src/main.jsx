import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from './components/Characters.jsx';
import Home from "./components/Home.jsx";
import Lore from './components/Lore.jsx';
import Dragons from "./components/Dragons.jsx";
import NotFound from "./components/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="characters" element={<Characters />}></Route>
          <Route path="dragons" element={<Dragons />}></Route>
          <Route path="lore" element={<Lore />}></Route>
          <Route path="character/:id" element={<Characters />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
