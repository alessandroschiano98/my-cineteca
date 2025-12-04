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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // durata intro

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <IntroScreen />;

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
