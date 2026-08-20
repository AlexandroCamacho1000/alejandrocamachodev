import './Projects.css';
import ProjectCard from './Projectcard';
import pokemonImg from "../../assets/pokemon.jpg";
import weatherImg from "../../assets/weather.jpg";
import { useLanguage } from '../../i18n/useLanguage';

function Projects() {
  const { t } = useLanguage();
  const featured = t('projects.featured');
  const items = t('projects.items');

  const projects = [];

  if (featured.title) {
    projects.push({
      ...featured,
      image: pokemonImg,
      tag: t('projects.featured.tag'),
      tech: featured.technologies,
      link: featured.repo,
      linkApp: featured.demo,
      featured: true,
    });
  }

  const secondaryMeta = [
    { link: "https://github.com/AlexandroCamacho1000/WeatherAppByAle", image: weatherImg, featured: true },
  ];

  items.forEach((item, i) => {
    projects.push({ ...item, ...secondaryMeta[i] });
  });

  return (
    <section className="projects" id="projects">
      <h2 className="section-title" data-index="01">{t('projects.title')}</h2>
      <p className="section-subtitle">{t('projects.subtitle')}</p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;