import { useEffect, useState } from 'react';
import './Projects.css';
import { FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';

function ProjectCard({ title, description, tech, link, linkApp, image }) {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  return (
    <>
      <div className="project-card">
        <div className="project-image">
          <button
            type="button"
            className="project-image-button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`${title} image`}
          >
            <img src={image} alt={title} />
          </button>
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

      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            <FaTimes />
          </button>
          <img src={image} alt={title} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

export default ProjectCard;