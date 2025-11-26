import React, { useState } from "react";
import Card from "../components/MovieCard";
import { movies } from "../data/MoviesList";
import "../style/MovieCard.css";
import "../style/Movies.css";

function Movies() {
  const [selectedGenre, setSelectedGenre] = useState("All");


  const filteredMovies =
    selectedGenre === "All"
      ? movies.flatMap(g => g.movies)
      : movies.find(g => g.name === selectedGenre)?.movies || [];

  return (
    <div className="container py-4">
      <h2 className="welcometitle">
        Qui troverai tutti i film selezionati e divisi per genere.
      </h2>

      {/* Menu a tendina per selezionare il genere */}
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


      <div className="row">
        {filteredMovies.map((film) => (
          
          <Card
            key={film.id}
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
