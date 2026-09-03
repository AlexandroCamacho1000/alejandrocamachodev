import { useEffect, useState } from 'react';
import './Projects.css';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaCloudSun,
  FaCode,
  FaCreditCard,
  FaDatabase,
  FaExternalLinkAlt,
  FaFileAlt,
  FaFilter,
  FaGithub,
  FaGlobe,
  FaRobot,
  FaSearch,
  FaShoppingCart,
  FaSort,
  FaTable,
  FaTimes,
  FaUserShield,
  FaUsers,
} from 'react-icons/fa';
import {
  SiDocker,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSequelize,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';
import { useLanguage } from '../../i18n/useLanguage';

const TECH_META = {
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  React: { icon: SiReact, color: '#61DAFB' },
  'Node.js': { icon: SiNodedotjs, color: '#83CD29' },
  Express: { icon: SiExpress, color: '#9CA3AF' },
  PostgreSQL: { icon: SiPostgresql, color: '#699ECA' },
  Sequelize: { icon: SiSequelize, color: '#52B0E7' },
  'REST API': { icon: FaGlobe, color: '#F7DF1E' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  Supabase: { icon: SiSupabase, color: '#3ECF8E' },
  'Express.js': { icon: SiExpress, color: '#9CA3AF' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Stripe: { icon: SiStripe, color: '#635BFF' },
  Vite: { icon: SiVite, color: '#646CFF' },
};

const DEFAULT_TECH = { icon: FaCode, color: 'var(--accent)' };

const FEATURE_ICONS = {
  Search: FaSearch,
  Búsqueda: FaSearch,
  Filtering: FaFilter,
  Filtrado: FaFilter,
  Sorting: FaSort,
  Ordenamiento: FaSort,
  CRUD: FaDatabase,
  "City Search": FaSearch,
  "Búsqueda de ciudad": FaSearch,
  "Current Conditions": FaCloudSun,
  "Condiciones actuales": FaCloudSun,
  Forecasts: FaCalendarAlt,
  Pronóstico: FaCalendarAlt,
  "Zone Comparison": FaTable,
  "Comparación de zonas": FaTable,
  "AI Chat": FaRobot,
  "Chat IA": FaRobot,
  "Data Reports": FaFileAlt,
  "Reportes de datos": FaFileAlt,
  "E-commerce & Catalog": FaShoppingCart,
  "E-commerce y Catálogo": FaShoppingCart,
  "Stripe Payments": FaCreditCard,
  "Pagos con Stripe": FaCreditCard,
  "Admin Panel": FaUserShield,
  "Panel Admin": FaUserShield,
  "CI/CD & Tests": FaCheckCircle,
  "CI/CD y Tests": FaCheckCircle,
};

function ProjectCard({ title, short, description, tech, highlights, link, linkApp, linkPlatform, image, tag, featured }) {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <div
        className="project-card-media"
        role="button"
        tabIndex={0}
        aria-label={`${t('projects.openImage')}: ${title}`}
        onClick={() => setLightboxOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setLightboxOpen(true);
          }
        }}
      >
        <img src={image} alt={title} />
      </div>

      <div className="project-card-info">
        {tag && <span className="project-card-tag">{tag}</span>}

        <h3 className="project-card-title">{title}</h3>

        <p className="project-card-short">{short || description}</p>

        {tech && tech.length > 0 && (
          <div className="project-card-block">
            <h4 className="project-card-block-title">
              {t('projects.featured.technologiesLabel')}
            </h4>
            <ul className="project-card-badges">
              {tech.map((name) => {
                const meta = TECH_META[name] || DEFAULT_TECH;
                const Icon = meta.icon;
                return (
                  <li
                    key={name}
                    className="project-card-badge"
                    style={{ '--brand': meta.color }}
                  >
                    <Icon aria-hidden="true" />
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <div className="project-card-block">
            <h4 className="project-card-block-title">
              {t('projects.featured.featuresLabel')}
            </h4>
            <ul className="project-card-features">
              {highlights.map((f) => {
                const Icon = FEATURE_ICONS[f] || FaCode;
                return (
                  <li key={f}>
                    <Icon aria-hidden="true" />
                    {f}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="project-links">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="link-github">
              <FaGithub aria-hidden="true" /> {t('projects.view')}
            </a>
          )}
          {linkPlatform && (
            <a href={linkPlatform} target="_blank" rel="noopener noreferrer" className="link-platform">
              <FaUsers aria-hidden="true" /> {t('projects.viewPlatform')}
            </a>
          )}
          {linkApp && (
            <a href={linkApp} target="_blank" rel="noopener noreferrer" className="link-demo">
              <FaExternalLinkAlt aria-hidden="true" /> {t('projects.viewApp')}
            </a>
          )}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setLightboxOpen(false)}
        >
          <div className="project-lightbox-inner">
            <img src={image} alt={title} />
          </div>
          <button
            type="button"
            className="project-lightbox-close"
            aria-label={t('projects.closeImage')}
            onClick={() => setLightboxOpen(false)}
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>
      )}
    </article>
  );
}

export default ProjectCard;