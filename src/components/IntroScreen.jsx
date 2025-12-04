import React, { useEffect, useState } from "react";
import "../style/IntroScreen.css";

function IntroScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 2500);
  }, []);

  return (
    <div className={`intro-container ${fadeOut ? "fade-out" : ""}`}>
      <img
        src="https://i.postimg.cc/R0kMFh5z/Logo-dell-occhio-con-raggio-di-luce.png"
        alt="Logo"
        className="intro-logo"
      />

      <h2 className="intro-text">Non sai che film vedere..?<br />Ci penso io.</h2>
    </div>
  );
}

export default IntroScreen;
