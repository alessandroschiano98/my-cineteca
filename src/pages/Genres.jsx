import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/MoviesList";
import Card from "../components/MovieCard";

function Genres() {
  const { genreName } = useParams();
  const genre = movies.find(
    (g) => g.name.toLowerCase() === genreName.toLowerCase()
  );

  if (!genre) return <h2 className="text-white p-4">Genere non trovato</h2>;

  return (
    <div className="container py-4">
      <h2 className="text-white mb-4">{genre.name}</h2>

      <div className="row">
        {genre.movies.map((film) => (
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

export default Genres;
