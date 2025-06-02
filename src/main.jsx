import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from './components/Characters.jsx';
import Home from "./styledComponents/Home.jsx";
import Books from "./styledComponents/Books.jsx";
import Dragons from "./components/Dragons.jsx";
import NotFound from "./components/NotFound.jsx";
import CharacterDetail from "./styledComponents/CharacterDetail.jsx";
import DragonDetail from "./styledComponents/DragonDetail.jsx";
import BookDetail from "./styledComponents/BookDetail.jsx";
import SignetQuiz from './components/SignetQuiz.jsx';
import DragonQuiz from "./components/DragonQuiz.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="books" element={<Books />}></Route>
          <Route path="characters" element={<Characters />}></Route>
          <Route path="dragons" element={<Dragons />}></Route>
          <Route path="signetQuiz" element={<SignetQuiz />}></Route>
          <Route path="dragonQuiz" element={<DragonQuiz />}></Route>
          <Route path="characters/:id" element={<CharacterDetail />}></Route>
          <Route path="dragons/:id" element={<DragonDetail />}></Route>
          <Route path="books/:id" element={<BookDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
