import './MyJourney.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function JourneyNode({ node }) {
  const ref = useReveal();

  return (
    <div className="timeline-item" ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-card">
        <h3>{node.title}</h3>
        {node.meta && <span className="timeline-period">{node.meta}</span>}
        {node.description && <p>{node.description}</p>}
        {node.tags && (
          <div className="timeline-tech">
            {node.tags.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MyJourney() {
  const { t } = useLanguage();
  const nodes = t('journey.nodes');

  return (
    <section className="experience" id="journey">
      <h2 className="section-title" data-index="04">{t('journey.title')}</h2>
      <p className="section-subtitle">{t('journey.subtitle')}</p>

      <div className="timeline">
        {nodes.map((node, i) => (
          <JourneyNode key={i} node={node} />
        ))}
      </div>
    </section>
  );
}

export default MyJourney;
