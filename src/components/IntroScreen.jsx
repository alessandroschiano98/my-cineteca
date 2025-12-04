import { useEffect, useState } from "react";
import "../style/IntroScreen.css";

export default function IntroScreen({ onFinish }) {
    const [explode, setExplode] = useState(false);
    const [lightOn, setLightOn] = useState(false);
    const [hideText, setHideText] = useState(false);
    const [flicker, setFlicker] = useState(true);


    useEffect(() => {
        // Accensione logo
        setTimeout(() => setLightOn(true), 300);

        // Nascondi la scritta prima dello zoom
        setTimeout(() => setHideText(true), 2000);

        // Effetto esplosione logo
        setTimeout(() => setExplode(true), 2600);

        // Chiudi intro
        setTimeout(() => onFinish(), 3500);

        setTimeout(() => setLightOn(true), 1400); 

        setTimeout(() => setFlicker(false), 1400);

    }, []);

    return (
        <div className="intro-container">
            <img
                src="https://i.postimg.cc/R0kMFh5z/Logo-dell-occhio-con-raggio-di-luce.png"
                alt="Logo"
                className={`intro-logo 
    ${flicker ? "flicker" : ""} 
    ${lightOn ? "light-up" : ""} 
    ${explode ? "explode" : ""}
  `}
            />

            <h2 className={`intro-text animated-text ${hideText ? "hide-text" : ""}`}>
                My Cineteca
            </h2>
        </div>
    );
}
