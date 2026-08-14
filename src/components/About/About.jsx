import './About.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function About() {
  const { t } = useLanguage();
  const gridRef = useReveal();
  const factsRef = useReveal();

  return (
    <section className="about" id="about">
      <div className="about-grid" ref={gridRef}>
        <div className="about-text">
          <h2 className="section-title" data-index="05">{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <p>{t('about.p4')}</p>
        </div>
      </div>

      <div className="about-facts" ref={factsRef}>
        {t('about.facts').map((fact, i) => (
          <div className="fact-card" key={i}>
            <div className="fact-label">{fact.label}</div>
            <div className="fact-value">{fact.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
