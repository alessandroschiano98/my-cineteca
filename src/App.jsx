import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import IntroScreen from "./components/IntroScreen";

import Home from "./pages/Home.jsx";
import Genres from "./pages/Genres.jsx";
import Movies from "./pages/Movies.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Navbar.css";
import "./style/MovieCard.css";
import "./style/Home.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) return <IntroScreen onFinish={() => setShowIntro(false)} />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres/:genreName" element={<Genres />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}


export default App;
