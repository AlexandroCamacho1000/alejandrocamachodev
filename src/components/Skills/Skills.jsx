import './Skills.css';
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSequelize,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { FaDatabase, FaInfinity, FaJira, FaServer, FaTrello, FaUsers } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

const TECH_ICONS = {
  React: { Icon: SiReact, color: '#61DAFB' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#38BDF8' },
  Vite: { Icon: SiVite, color: '#A855F7' },
  'Node.js': { Icon: SiNodedotjs, color: '#83CD29' },
  Express: { Icon: SiExpress, color: 'var(--accent)' },
  'REST APIs': { Icon: FaServer, color: 'var(--accent)' },
  PostgreSQL: { Icon: SiPostgresql, color: '#699ECA' },
  SQL: { Icon: FaDatabase, color: 'var(--accent)' },
  Sequelize: { Icon: SiSequelize, color: '#52B0E7' },
  Supabase: { Icon: SiSupabase, color: '#3ECF8E' },
  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub, color: 'var(--text-primary)' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  'GitHub Actions': { Icon: SiGithubactions, color: '#2088FF' },
  Vercel: { Icon: SiVercel, color: 'var(--text-primary)' },
  Agile: { Icon: FaInfinity, color: 'var(--accent)' },
  Scrum: { Icon: FaUsers, color: 'var(--accent)' },
  Jira: { Icon: FaJira, color: '#2684FF' },
  Trello: { Icon: FaTrello, color: '#0079BF' },
};

function Skills() {
  const { t } = useLanguage();
  const gridRef = useReveal();
  const groups = t('skills.groups');

  return (
    <section className="skills" id="skills">
      <h2 className="section-title" data-index="03">{t('skills.title')}</h2>
      <p className="section-subtitle">{t('skills.subtitle')}</p>

      <div className="stack-grid" ref={gridRef}>
        {groups.map((group) => (
          <div className="stack-card" key={group.title}>
            <div className="stack-card-header">
              <h3 className="stack-card-title">{group.title}</h3>
            </div>
            <ul className="stack-card-items">
              {group.items.map((item) => {
                const meta = TECH_ICONS[item];
                return (
                  <li className="stack-item" key={item}>
                    {meta && (
                      <span className="stack-item-icon" style={{ color: meta.color }}>
                        <meta.Icon />
                      </span>
                    )}
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
