import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-socials">
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
        <a href="mailto:alejandrocc1955@gmail.com" aria-label="Email">
          <FaEnvelope />
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
      <p className="footer-sig">{t('footer.sig')}</p>
      <p>{t('footer.rights')}</p>
    </footer>
  );
}

export default Footer;
