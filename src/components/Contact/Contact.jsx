import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function Contact() {
  const { t } = useLanguage();
  const listRef = useReveal();

  return (
    <section className="contact" id="contact">
      <h2 className="section-title" data-index="06">{t('contact.title')}</h2>
      {t('contact.subtitle') && (
        <p className="section-subtitle">{t('contact.subtitle')}</p>
      )}

      <ul className="contact-list" ref={listRef}>
        <li className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/AlexandroCamacho1000"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/alejandro-camacho19/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:alejandrocc1955@gmail.com">Email</a>
        </li>
        <li className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <a
            href="https://wa.me/59176486766?text=Hola%20Alejandro"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
