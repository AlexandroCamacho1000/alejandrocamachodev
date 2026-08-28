import './Education.css';
import { FaCode, FaGraduationCap } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function EducationItem({ item }) {
  const ref = useReveal();
  const Icon = item.featured ? FaGraduationCap : FaCode;

  return (
    <div
      className={`education-card${item.featured ? ' education-card--featured' : ''}`}
      ref={ref}
    >
      <span className="education-icon" aria-hidden="true"><Icon /></span>
      <h3>{item.degree}</h3>
      <span className="education-institution">{item.institution}</span>
      <div className="education-divider" aria-hidden="true" />
      <span className="education-location">{item.location}</span>
      {item.note && (
        <p className="education-note">{item.note}</p>
      )}
    </div>
  );
}

function Education() {
  const { t } = useLanguage();
  const items = t('education.items');

  return (
    <section className="education" id="education">
      <h2 className="section-title" data-index="05">{t('education.title')}</h2>
      <div className="education-grid">
        {items.map((item, i) => (
          <EducationItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Education;
