import React, { useEffect } from "react";
import { movies } from "../data/MoviesGenre";
import { Link } from "react-router-dom";
import AboutSection from "../components/About";
import "../style/Home.css";

function Home() {

  // 🔥 Controlla se deve scrollare al "Chi Siamo"
  useEffect(() => {
    const shouldScroll = localStorage.getItem("scrollToAbout");

    if (shouldScroll === "yes") {
      const target = document.getElementById("about");
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300); // tempo per far renderizzare la pagina
      }
      localStorage.removeItem("scrollToAbout");
    }
  }, []);

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
      <div className="scrollText fade-in delay">
        <span className="scroll-text">
          La lista dei film viene aggiornata periodicamente ◕‿◕
        </span>
      </div>

      {/* COS' E? */}
      <AboutSection />
    </div>
  );
}

export default Home;
