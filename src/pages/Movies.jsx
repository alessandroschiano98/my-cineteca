import React, { useState } from "react";
import Card from "../components/MovieCard";
import { movies } from "../data/MoviesGenre";
import "../style/MovieCard.css";
import "../style/Movies.css";

function Movies() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredMovies =
    selectedGenre === "All"
      ? movies.flatMap((g) => g.movies)
      : movies.find((g) => g.name === selectedGenre)?.movies || [];


  const sortedMovies = [...filteredMovies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="container py-4">
      <h2 className="welcometitle">
        Qui troverai tutti i film selezionati e divisi per genere.
      </h2>

      {/* FILTRO GENERE */}
      <div className="select-wrapper mb-4">
        <select
          className="custom-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All">Tutti i generi</option>
          {movies.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      {/* LISTA FILM */}
      <div className="row">
        {sortedMovies.map((film) => (
          <Card
            key={`${film.title}-${film.year}`}
            title={film.title}
            year={film.year}
            actors={film.actors}
            director={film.director}
            imgURL={film.poster}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
