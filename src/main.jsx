import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from './components/Characters.jsx';
import Home from "./components/Home.jsx";
import Books from "./components/Books.jsx";
import Lore from './components/More.jsx';
import Dragons from "./components/Dragons.jsx";
import NotFound from "./components/NotFound.jsx";
import CharacterDetail from "./components/CharacterDetail2.jsx";
import DragonDetail from "./components/DragonDetail2.jsx";
import BookDetail from "./components/BookDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="books" element={<Books />}></Route>
          <Route path="characters" element={<Characters />}></Route>
          <Route path="dragons" element={<Dragons />}></Route>
          <Route path="lore" element={<Lore />}></Route>
          <Route path="characters/:id" element={<CharacterDetail />}></Route>
          <Route path="dragons/:id" element={<DragonDetail />}></Route>
          <Route path="books/:id" element={<BookDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
