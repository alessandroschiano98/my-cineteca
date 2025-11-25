import React from "react";
import Card from "./components/MovieCard";
import Navbar from "./components/Navbar";
import { movies } from "./data/MoviesList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Navbar.css";
import "./style/MovieCard.css";



function App() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h2 className="welcometitle">
         Benvenuto, qui troverai tutti film che ho meticolosamente selezionato e diversificato per genere secondo il mio gusto.
        </h2>
{/* GENERI FILM */}
        {movies.map((genre) => (
          <div key={genre.name} className="mb-5">
            <h3 className="text-white mb-3">{genre.name}</h3>
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
        ))}
      </div>
    </>
  );
}

export default App;
