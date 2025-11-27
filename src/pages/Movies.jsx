import React, { useState, useEffect } from "react";
import Card from "../components/MovieCard";
import { movies } from "../data/MoviesList";
import { fetchPoster } from "../api/fetchPoster";
import "../style/MovieCard.css";
import "../style/Movies.css";

function Movies() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [loaded, setLoaded] = useState(false);

  // Carica automaticamente i poster mancanti
  useEffect(() => {
    async function loadPosters() {
      for (const genre of movies) {
        for (const film of genre.movies) {
          // Se non esiste il poster → usa TMDB
          if (!film.poster || film.poster === "") {
            const tmdbPoster = await fetchPoster(film.title, film.year);

            film.poster =
              tmdbPoster ||
              "https://via.placeholder.com/300x450?text=Coming+Soon";
          }
        }
      }
      setLoaded(true); // forza il re-render dopo il caricamento poster
    }

    loadPosters();
  }, []);

  const filteredMovies =
    selectedGenre === "All"
      ? movies.flatMap((g) => g.movies)
      : movies.find((g) => g.name === selectedGenre)?.movies || [];

  if (!loaded) {
    return (
      <div className="container text-center text-white py-5">
        <h3>Caricamento poster in corso...</h3>
      </div>
    );
  }

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

      {/* LISTA FILM FILTRATI */}
      <div className="row">
        {filteredMovies.map((film) => (
          <Card
            key={`${film.title}-${film.year}`} // ID automatico
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
