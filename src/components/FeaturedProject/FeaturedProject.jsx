import './FeaturedProject.css';
import { FaExternalLinkAlt, FaGithub, FaLightbulb, FaWrench, FaListUl, FaUserCog, FaCogs } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function FeaturedProject() {
  const { t } = useLanguage();
  const revealRef = useReveal();

  const featured = {
    title: t('projects.featured.title'),
    problem: t('projects.featured.problem'),
    solution: t('projects.featured.solution'),
    contribution: t('projects.featured.contribution'),
    challenges: t('projects.featured.challenges'),
    technologies: t('projects.featured.technologies'),
    demo: t('projects.featured.demo'),
    repo: t('projects.featured.repo'),
  };

  if (!featured.title) {
    return null;
  }

  const sections = [
    { label: t('projects.featured.problemLabel'), text: featured.problem, icon: <FaLightbulb /> },
    { label: t('projects.featured.solutionLabel'), text: featured.solution, icon: <FaListUl /> },
    { label: t('projects.featured.contributionLabel'), text: featured.contribution, icon: <FaUserCog /> },
    { label: t('projects.featured.challengesLabel'), text: featured.challenges, icon: <FaCogs /> },
  ];

  return (
    <section className="featured" id="featured">
      <div className="featured-container" ref={revealRef}>
        <p className="featured-tag">{t('projects.featured.tag')}</p>
        <h2 className="section-title" data-index="05">
          {featured.title}
        </h2>

        {sections.map((section, index) => (
          <div className="featured-block" key={index}>
            <div className="featured-block-icon">{section.icon}</div>
            <div className="featured-block-content">
              <h3>{section.label}</h3>
              <p>{section.text}</p>
            </div>
          </div>
        ))}

        <div className="featured-tech">
          <h3>
            <FaWrench /> {t('projects.featured.technologiesLabel')}
          </h3>
          <ul>
            {featured.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="featured-links">
          {featured.demo && (
            <a href={featured.demo} target="_blank" rel="noreferrer" className="btn-primary">
              <FaExternalLinkAlt /> {t('projects.viewApp')}
            </a>
          )}
          {featured.repo && (
            <a href={featured.repo} target="_blank" rel="noreferrer" className="btn-outline">
              <FaGithub /> {t('projects.view')}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;