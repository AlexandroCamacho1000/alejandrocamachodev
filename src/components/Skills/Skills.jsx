import './Skills.css';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSqlite,
  SiAmazonwebservices,
  SiGit,
  SiGithub,
  SiDocker,
} from 'react-icons/si';
import { FaServer, FaDatabase } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function Skills() {
  const { t } = useLanguage();
  const frontendRef = useReveal();
  const backendRef = useReveal();
  const databaseRef = useReveal();
  const cloudRef = useReveal();

  const groups = [
    {
      titleKey: 'skills.frontendTitle',
      ref: frontendRef,
      skills: [
        { nameKey: 'skills.frontend.javascript', icon: <SiJavascript /> },
        { nameKey: 'skills.frontend.react', icon: <SiReact /> },
        { nameKey: 'skills.frontend.html', icon: <SiHtml5 /> },
        { nameKey: 'skills.frontend.css', icon: <SiCss3 /> },
        { nameKey: 'skills.frontend.tailwind', icon: <SiTailwindcss /> },
      ],
    },
    {
      titleKey: 'skills.backendTitle',
      ref: backendRef,
      skills: [
        { nameKey: 'skills.backend.node', icon: <SiNodedotjs /> },
        { nameKey: 'skills.backend.express', icon: <SiExpress /> },
        { nameKey: 'skills.backend.rest', icon: <FaServer /> },
      ],
    },
    {
      titleKey: 'skills.databaseTitle',
      ref: databaseRef,
      skills: [
        { nameKey: 'skills.database.postgresql', icon: <SiPostgresql /> },
        { nameKey: 'skills.database.sql', icon: <SiSqlite /> },
        { nameKey: 'skills.database.sequelize', icon: <FaDatabase /> },
      ],
    },
    {
      titleKey: 'skills.cloudTitle',
      ref: cloudRef,
      skills: [
        { nameKey: 'skills.cloud.git', icon: <SiGit /> },
        { nameKey: 'skills.cloud.github', icon: <SiGithub /> },
        { nameKey: 'skills.cloud.aws', icon: <SiAmazonwebservices /> },
        { nameKey: 'skills.cloud.docker', icon: <SiDocker /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title" data-index="03">{t('skills.title')}</h2>
      <p className="section-subtitle">{t('skills.subtitle')}</p>

      {groups.map((group) => (
        <div className="skills-group" key={group.titleKey}>
          <h3 className="skills-subtitle">{t(group.titleKey)}</h3>
          <ul className="skills-grid" ref={group.ref}>
            {group.skills.map((skill) => (
              <li key={skill.nameKey} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{t(skill.nameKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
