import './Education.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function EducationItem({ item }) {
  const ref = useReveal();

  return (
    <div
      className={`education-card${item.featured ? ' education-card--featured' : ''}`}
      ref={ref}
    >
      <h3>{item.degree}</h3>
      <span className="education-institution">{item.institution}</span>
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
