import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/MoviesGenre";
import Card from "../components/MovieCard";

function Genres() {
  const { genreName } = useParams();

  const genre = movies.find(
    (g) => g.name.toLowerCase() === genreName.toLowerCase()
  );

  if (!genre) return <h2 className="text-white p-4">Genere non trovato</h2>;

  //! ORDINAMENTO PER DATA + ORDINAMENTO ALFABETICO
  const sortedMovies = [...genre.movies].sort((a, b) => a.year - b.year);

  return (
    <div className="container py-4">
      <h2 className="text-white mb-4">{genre.name}</h2>

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

export default Genres;
