import './Education.css';
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

  return (
    <section className="education" id="education">
      <h2 className="section-title" data-index="04">{t('education.title')}</h2>
      <p className="section-subtitle">{t('education.subtitle')}</p>

      <div className="education-grid">
        {items.map((item, i) => (
          <EducationItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Education;