import { useEffect, useState } from "react";
import "../style/IntroScreen.css";

export default function IntroScreen({ onFinish }) {
  const [flicker, setFlicker] = useState(true);
  const [lightOn, setLightOn] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    // 1) Flicker iniziale (si spegne a 1.4s)
    setTimeout(() => setFlicker(false), 1400);

    // 2) Logo si accende + mostra "My Cineteca"
    setTimeout(() => {
      setLightOn(true);
      setShowBrand(true);
    }, 1400);

    // 3) Nasconde il testo giallo
    setTimeout(() => setHideText(true), 2000);

    // 4) Nasconde "My Cineteca"
    setTimeout(() => setShowBrand(false), 2400);

    // 5) Esplosione logo
    setTimeout(() => setExplode(true), 2600);

    // 6) Fine intro → mostra Home
    setTimeout(() => onFinish(), 3000);

  }, []);

  return (
    <div className="intro-container">
      
      {/* LOGO */}
      <img
        src="https://i.postimg.cc/R0kMFh5z/Logo-dell-occhio-con-raggio-di-luce.png"
        alt="Logo"
        className={`
          intro-logo
          ${flicker ? "flicker" : ""}
          ${lightOn ? "light-up" : ""}
          ${explode ? "explode" : ""}
        `}
      />


      {/* SCRITTA “MY CINETECA” */}
      <h1 className={`brand-title ${showBrand ? "brand-show" : "brand-hide"}`}>
        My Cineteca
      </h1>
    </div>
  );
}
