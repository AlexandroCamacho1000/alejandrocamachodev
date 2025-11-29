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
  SiJira, 
  SiScrumalliance 
} from "react-icons/si";

import { 
  FaUsers, 
  FaHandshake, 
  FaStopwatch 
} from "react-icons/fa";

import { 
  MdOutlineMessage, 
  MdSupportAgent 
} from "react-icons/md";

import { 
  AiOutlineSolution, 
  AiOutlineSchedule 
} from "react-icons/ai";

function Skills() {
  const technicalSkills = [
    { name: "React.js", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Scrum", icon: <SiScrumalliance /> },
  ];

  const softSkills = [
    { name: "Teamwork", icon: <FaUsers /> },
    { name: "Effective Communication", icon: <MdOutlineMessage /> },
    { name: "Work Under Pressure", icon: <FaStopwatch /> },
    { name: "User Support", icon: <MdSupportAgent /> },
    { name: "Technical Issue Resolution", icon: <AiOutlineSolution /> },
    { name: "User Trust", icon: <FaHandshake /> },
    { name: "Time Management", icon: <AiOutlineSchedule /> }
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <h3 className="skills-subtitle">Technical Skills</h3>
      <ul className="skills-list">
        {technicalSkills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>

      <h3 className="skills-subtitle">Soft Skills</h3>
      <ul className="skills-list">
        {softSkills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
