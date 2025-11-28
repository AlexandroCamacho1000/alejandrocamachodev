import './Contact.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <ul className="contact-list">
        <li className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:alejandrocc1955@gmail.com">alejandrocc1955@gmail.com</a>
        </li>
        <li className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/alejandro-camacho19/"
            target="_blank"
            rel="noreferrer"
          >
            Alejandro Camacho
          </a>
        </li>
        <li className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/AlexandroCamacho1000"
            target="_blank"
            rel="noreferrer"
          >
            AlexandroCamacho1000
          </a>
        </li>
        <li className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <a
            href="https://wa.me/59176486766?text=Hola%20Alejandro"
            target="_blank"
            rel="noreferrer"
          >
            +591 76486766
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
