import './MyJourney.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function JourneyStage({ stage }) {
  const ref = useReveal();

  return (
    <div className="journey-stage-wrapper" ref={ref}>
      <div className="journey-stage-node">
        <span className="journey-stage-number">{stage.num}</span>
        <span className="journey-stage-dot" />
      </div>
      <div className="journey-stage-content">
        <h3 className="journey-stage-title">{stage.title}</h3>
        <p className="journey-stage-label">{stage.label}</p>
        <p className="journey-stage-techs">{stage.tags.join(' · ')}</p>
      </div>
    </div>
  );
}

function MyJourney() {
  const { t } = useLanguage();
  const gridRef = useReveal();
  const stages = t('journey.stages');

  return (
    <section className="journey-section" id="journey">
      <header className="journey-header" ref={gridRef}>
        <h2 className="section-title" data-index="04">{t('journey.title')}</h2>
        <p className="section-subtitle">{t('journey.subtitle')}</p>
      </header>

      <div className="journey-timeline">
        {stages.map((stage, index) => (
          <JourneyStage key={stage.num} stage={stage} index={index} total={stages.length} />
        ))}
      </div>

      <p className="journey-closing">{t('journey.closing')}</p>
    </section>
  );
}

export default MyJourney;