import React from "react";
import { movies } from "../data/MoviesList";
import { Link } from "react-router-dom";
import "../style/Home.css";

function Home() {
  return (
    <div className="container py-5">

      {/* TITOLO */}
      <h2 className="scegligenere fade-in delay-0">
        Scegli un genere per iniziare
      </h2>

      {/* LISTA GENERI */}
      <ul className="genre-list fade-in delay-1">
        {movies.map((genre) => (
          <li key={genre.name}>
            <Link to={`/genres/${genre.name.toLowerCase()}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>

      {/* TESTO SCORREVOLE */}
      <div className="scrollText fade-in delay-2">
        <span className="scroll-text">
          La lista dei film viene aggiornata periodicamente ◕‿◕
        </span>
      </div>

    </div>
  );
}

export default Home;
