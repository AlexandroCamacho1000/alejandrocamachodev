import './Skills.css';
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiCss3, 
  SiTailwindcss, 
  SiGithub, 
  SiScrumalliance,
  SiGithubcopilot, 
  SiClaude, 
  SiOpenai, 
  SiGooglegemini,
  SiDocker,
  SiGithubactions,
  SiJest,
  SiTestinglibrary,
  SiVercel
} from 'react-icons/si';

import { FaUsers, FaStopwatch } from 'react-icons/fa';

import { MdOutlineMessage } from 'react-icons/md';

import { AiOutlineSolution, AiOutlineSchedule } from 'react-icons/ai';

import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

function Skills() {
  const { t } = useLanguage();
  const technicalRef = useReveal();
  const softRef = useReveal();
  const aiRef = useReveal();
  const devopsRef = useReveal();

  const technicalSkills = [
    { nameKey: "skills.technical.react", icon: <SiReact /> },
    { nameKey: "skills.technical.javascript", icon: <SiJavascript /> },
    { nameKey: "skills.technical.node", icon: <SiNodedotjs /> },
    { nameKey: "skills.technical.express", icon: <SiExpress /> },
    { nameKey: "skills.technical.postgresql", icon: <SiPostgresql /> },
    { nameKey: "skills.technical.css", icon: <SiCss3 /> },
    { nameKey: "skills.technical.tailwind", icon: <SiTailwindcss /> },
    { nameKey: "skills.technical.github", icon: <SiGithub /> },
    { nameKey: "skills.technical.scrum", icon: <SiScrumalliance /> },
  ];

  const softSkills = [
    { nameKey: "skills.soft.teamwork", icon: <FaUsers /> },
    { nameKey: "skills.soft.communication", icon: <MdOutlineMessage /> },
    { nameKey: "skills.soft.pressure", icon: <FaStopwatch /> },
    { nameKey: "skills.soft.resolution", icon: <AiOutlineSolution /> },
    { nameKey: "skills.soft.time", icon: <AiOutlineSchedule /> },
  ];

  const aiSkills = [
    { nameKey: "skills.ai.copilot", icon: <SiGithubcopilot /> },
    { nameKey: "skills.ai.claude", icon: <SiClaude /> },
    { nameKey: "skills.ai.chatgpt", icon: <SiOpenai /> },
    { nameKey: "skills.ai.gemini", icon: <SiGooglegemini /> },
  ];

  const devopsSkills = [
    { nameKey: "skills.devops.docker", icon: <SiDocker /> },
    { nameKey: "skills.devops.githubactions", icon: <SiGithubactions /> },
    { nameKey: "skills.devops.jest", icon: <SiJest /> },
    { nameKey: "skills.devops.testingLibrary", icon: <SiTestinglibrary /> },
    { nameKey: "skills.devops.vercel", icon: <SiVercel /> },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title" data-index="02">{t('skills.title')}</h2>
      <p className="section-subtitle">{t('skills.subtitle')}</p>

      <h3 className="skills-subtitle">{t('skills.technicalTitle')}</h3>
      <ul className="skills-grid" ref={technicalRef}>
        {technicalSkills.map((skill) => (
          <li key={skill.nameKey} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{t(skill.nameKey)}</span>
          </li>
        ))}
      </ul>

      <h3 className="skills-subtitle">{t('skills.softTitle')}</h3>
      <ul className="skills-grid" ref={softRef}>
        {softSkills.map((skill) => (
          <li key={skill.nameKey} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{t(skill.nameKey)}</span>
          </li>
        ))}
      </ul>

      <h3 className="skills-subtitle">{t('skills.aiTitle')}</h3>
      <ul className="skills-grid" ref={aiRef}>
        {aiSkills.map((skill) => (
          <li key={skill.nameKey} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{t(skill.nameKey)}</span>
          </li>
        ))}
      </ul>

      <h3 className="skills-subtitle">{t('skills.devopsTitle')}</h3>
      <ul className="skills-grid" ref={devopsRef}>
        {devopsSkills.map((skill) => (
          <li key={skill.nameKey} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{t(skill.nameKey)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
