import { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFinished(true), 6000); // igual al tiempo de animación
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <img src="/fotoAle.png" alt="Foto de Alejandro Camacho" className="hero-profile" />

      <h2 className="glitch" data-text="Hi, I'm Alejandro Camacho">
        Hi, I'm Alejandro Camacho
      </h2>

      <p className={finished ? 'finished' : ''}>
        I'm a Full Stack Developer <span className="hero-highlight">&</span> Network Engineer
      </p>

      <div className="hero-buttons">
        <a href="/CV-Alejandro-Camacho.pdf" download="Alejandro-Camacho-CV.pdf" className="neon-btn">
          Download CV
        </a>
        <a href="/CV-Alejandro-Camacho.pdf" download="Alejandro-Camacho-CV.pdf" className="neon-btn blue-btn">
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export default Hero;
