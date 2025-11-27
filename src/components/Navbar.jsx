import { Link, useNavigate, useLocation } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToAbout = () => {
    if (location.pathname !== "/") {
      // Se NON sei nella home → segna che devi scrollare
      localStorage.setItem("scrollToAbout", "yes");
      navigate("/"); // vai alla Home
    } else {
      // Se sei già nella Home → scrolla subito
      const target = document.getElementById("about");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          MyCineteca
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/movies">Film</Link>
            </li>

            <li className="nav-item">
              <Link
                to="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  goToAbout();
                }}
              >
                Chi Siamo
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
