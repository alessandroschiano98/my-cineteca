import React from "react";
import { movies } from "../data/MoviesList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <h2 className="scegligenere">
        Scegli un genere per iniziare
      </h2>

      <ul className="genre-list">
        {movies.map((genre) => (
          <li key={genre.name}>
            <Link to={`/genres/${genre.name.toLowerCase()}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>

      <div class="scrollText">
        <span class="scroll-text">
          La lista dei film viene aggiornata periodicalmente ◕‿◕
        </span>
      </div>
    </div>

  );
}

export default Home;
