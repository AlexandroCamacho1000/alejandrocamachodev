import './Education.css';
import { FaCertificate } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function EducationItem({ item }) {
  const ref = useReveal();

  return (
    <div className="education-card" ref={ref}>
      <h3>{item.degree}</h3>
      <span className="education-institution">{item.institution}</span>
      {item.year && <span className="education-year">{item.year}</span>}
    </div>
  );
}

function Education() {
  const { t } = useLanguage();
  const items = t('education.items');
  const certs = t('certifications.items');
  const certRef = useReveal();

  return (
    <section className="education" id="education">
      <h2 className="section-title" data-index="06">{t('education.title')}</h2>
      <p className="section-subtitle">{t('education.subtitle')}</p>

      <div className="education-grid">
        {items.map((item, i) => (
          <EducationItem key={i} item={item} />
        ))}
      </div>

      {certs && certs.length > 0 && (
        <div className="education-certs" ref={certRef}>
          <h3>{t('certifications.title')}</h3>
          <ul>
            {certs.map((cert, i) => (
              <li key={i}>
                <span className="education-cert-icon">
                  <FaCertificate />
                </span>
                <span>
                  {cert.degree}
                  <span className="education-cert-institution">
                    {" — "}
                    {cert.institution}
                    {cert.year && ` (${cert.year})`}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Education;