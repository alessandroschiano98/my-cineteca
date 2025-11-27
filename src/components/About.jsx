// src/components/AboutSection.jsx
import React from "react";
import "../style/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2><b>Cos'è My Cineteca?</b></h2>
        <p>
         E' un archivio personale dei miei film preferiti, divisi per
          genere, con attori e registi. Nasce per avere sempre con me una
          selezione curata nel tempo, constantemente aggiornata. 
        </p>
      </div>
    </section>
  );
}
