import './MyJourney.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function JourneyStage({ stage }) {
  const ref = useReveal();
  return (
    <div className="journey-stage" ref={ref}>
      <span className="journey-dot" aria-hidden="true" />
      <h3 className="journey-title">{stage.title}</h3>
      <p className="journey-role">{stage.label}</p>
      {stage.tags && (
        <p className="journey-meta">{stage.tags.join(' · ')}</p>
      )}
    </div>
  );
}

function MyJourney() {
  const { t } = useLanguage();
  const headerRef = useReveal();
  const stages = t('journey.stages');

  return (
    <section className="journey" id="journey">
      <div className="journey-header" ref={headerRef}>
        <h2 className="section-title" data-index="04">{t('journey.title')}</h2>
        <p className="section-subtitle">{t('journey.subtitle')}</p>
      </div>
      <div className="journey-track">
        {stages.map((stage) => (
          <JourneyStage key={stage.title} stage={stage} />
        ))}
      </div>
    </section>
  );
}

export default MyJourney;
