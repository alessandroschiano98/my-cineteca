import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/MovieCard.css";

function Card({ title, year, actors, director, imgURL }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm movie-card">
        <img src={imgURL} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{title}</h5>
          <p className="text-muted text-center mb-2">{year}</p>
          <div className="mt-auto">
            <h6 className="fw-bold">♦ Attori principali:</h6>
            <ul className="list-unstyled mb-2">
              {actors.map((actor, index) => (
                <li key={index}>◊ {actor}</li>
              ))}
            </ul>
            <h6 className="fw-bold">♦ Regia:</h6>
            <p className="mb-0">{director}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
