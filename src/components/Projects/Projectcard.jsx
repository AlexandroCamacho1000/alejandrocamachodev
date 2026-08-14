import './Projects.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function ProjectCard({ title, description, tech, link, linkApp, image }) {
  const { t } = useLanguage();
  const cardRef = useReveal();

  return (
    <div className="project-card" ref={cardRef}>
      <div className="project-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>

        {tech && tech.length > 0 && (
          <div className="project-tech">
            {tech.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-links">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-repo"
          >
            {t('projects.view')}
          </a>
          {linkApp && (
            <a
              href={linkApp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-demo"
            >
              {t('projects.viewApp')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
