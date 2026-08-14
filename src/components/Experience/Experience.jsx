import './Experience.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function ExperienceItem({ job }) {
  const ref = useReveal();

  return (
    <div className="timeline-item" ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-card">
        <h3>{job.role}</h3>
        <span className="timeline-company">{job.company}</span>
        <span className="timeline-period">{job.period}</span>
        <p>{job.description}</p>
        <ul>
          {job.achievements.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
        <div className="timeline-tech">
          {job.tech.map((tag) => (
            <span className="tech-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const { t } = useLanguage();
  const jobs = t('experience.jobs');

  return (
    <section className="experience" id="experience">
      <h2 className="section-title" data-index="03">{t('experience.title')}</h2>
      <p className="section-subtitle">{t('experience.subtitle')}</p>

      <div className="timeline">
        {jobs.map((job, i) => (
          <ExperienceItem key={i} job={job} />
        ))}
      </div>
    </section>
  );
}

export default Experience;