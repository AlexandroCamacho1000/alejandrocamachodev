import './MyJourney.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function JourneyStep({ stage }) {
  const ref = useReveal();

  return (
    <div className="journey-step" ref={ref}>
      <div className="journey-rail">
        <span className="journey-step-num">{stage.num}</span>
        <span className="journey-node" />
      </div>
      <div className="journey-step-body">
        <h3 className="journey-stage">{stage.title}</h3>
        <p className="journey-label">{stage.label}</p>
        <p className="journey-tech">{stage.tags.join(' · ')}</p>
      </div>
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

      <div className="journey-timeline" ref={gridRef}>
        {stages.map((stage) => (
          <JourneyStep key={stage.num} stage={stage} />
        ))}
      </div>

      <p className="journey-closing">{t('journey.closing')}</p>
    </section>
  );
}

export default MyJourney;
