import React from "react";
import Card from "./components/MovieCard";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Navbar.css";
import "./style/MovieCard.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4 text-white">
          Questa è la lista dei miei film preferiti
        </h2>

        <div className="row">
          <Card
            title="Inception"
            year="2010"
            actors={["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]}
            imgURL="https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_UF1000,1000_QL80_.jpg"
          />
          <Card
            title="The Dark Knight"
            year="2008"
            actors={["Christian Bale", "Heath Ledger", "Aaron Eckhart"]}
            imgURL="https://static.posters.cz/image/750webp/198201.webp"
          />
          <Card
            title="Interstellar"
            year="2014"
            actors={["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]}
            imgURL="https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_UF1000,1000_QL80_.jpg"
          />
          <Card
            title="The Wolf of Wall Street"
            year="2013"
            actors={["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"]}
            imgURL="https://s3.amazonaws.com/nightjarprod/content/uploads/sites/238/2023/08/23151410/pWHf4khOloNVfCxscsXFj3jj6gP-718x1024.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default App;
