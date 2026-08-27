import './MyJourney.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function JourneyStage({ stage }) {
  const ref = useReveal();
  return (
    <div className="journey-stage" ref={ref}>
      <span className="journey-dot" aria-hidden="true"><span className="journey-dot-code">&lt;/&gt;</span></span>
      <span className="journey-stem" aria-hidden="true" />
      <h3 className="journey-title">{stage.title}</h3>
      <p className="journey-role">{stage.label}</p>
    </div>
  );
}

function MyJourney() {
  const { t } = useLanguage();
  const headerRef = useReveal();
  const trackRef = useReveal();
  const stages = t('journey.stages');

  return (
    <section className="journey" id="journey">
      <div className="journey-header" ref={headerRef}>
        <h2 className="section-title" data-index="04">{t('journey.title')}</h2>
        <p className="section-subtitle">{t('journey.subtitle')}</p>
      </div>
      <div className="journey-track" ref={trackRef}>
        {stages.map((stage) => (
          <JourneyStage key={stage.title} stage={stage} />
        ))}
      </div>
    </section>
  );
}

export default MyJourney;
