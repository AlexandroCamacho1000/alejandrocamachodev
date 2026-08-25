import './MyJourney.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function StageCard({ stage }) {
  const ref = useReveal();

  return (
    <div className="journey-card" ref={ref}>
      <span className="journey-num">{stage.num}</span>
      <h3 className="journey-stage">{stage.title}</h3>
      <p className="journey-label">{stage.label}</p>
      <ul className="journey-tags">
        {stage.tags.map((tag) => (
          <li className="journey-tag" key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

function MyJourney() {
  const { t } = useLanguage();
  const gridRef = useReveal();
  const stages = t('journey.stages');

  return (
    <section className="experience" id="journey">
      <h2 className="section-title" data-index="04">{t('journey.title')}</h2>
      <p className="section-subtitle">{t('journey.subtitle')}</p>

      <div className="journey-grid" ref={gridRef}>
        {stages.map((stage) => (
          <StageCard key={stage.num} stage={stage} />
        ))}
      </div>

      <p className="journey-closing">{t('journey.closing')}</p>
    </section>
  );
}

export default MyJourney;
