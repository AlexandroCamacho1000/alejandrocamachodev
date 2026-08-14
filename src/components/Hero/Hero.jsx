import './Hero.css';
import fotoAle from '../../assets/fotoAle.jpg'
import cvEn from '../../../public/Alejandro-Camacho.pdf'
import cvEs from '../../../public/Alejandro-Camacho-CV.pdf'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function Hero() {
  const { lang, t } = useLanguage();
  const cvFile = lang === 'es' ? cvEs : cvEn;
  const revealRef = useReveal();

  return (
    <section className="hero" id="hero">
      <div className="hero-content" ref={revealRef}>
        <div className="hero-text">
          <p className="hero-greeting">{t('hero.greeting')}</p>
          <h1 className="hero-name">{t('hero.name')}</h1>
          <h2 className="hero-role">{t('hero.role')}</h2>
          <p className="hero-summary">{t('hero.summary')}</p>

          <div className="hero-actions">
            <a
              href={cvFile}
              download="Alejandro-Camacho-CV.pdf"
              className="btn-primary"
            >
              {t('hero.downloadCV')}
            </a>
            <a href="#contact" className="btn-outline">
              {t('hero.contact')}
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/AlexandroCamacho1000"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-camacho19/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/59176486766"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={fotoAle} alt={t('hero.alt')} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
