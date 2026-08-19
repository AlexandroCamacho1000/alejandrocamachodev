import './Projects.css';
import ProjectCard from './Projectcard';
import calculatorImg from "../../assets/calculator.jpg";
import todoImg from "../../assets/to-do.jpg";
import weatherImg from "../../assets/weather.jpg";
import pokemonImg from "../../assets/pokemon.jpg";
import { useLanguage } from '../../i18n/useLanguage';

function Projects() {
  const { t } = useLanguage();

  const meta = [
    { link: "https://github.com/AlexandroCamacho1000/PokemonAppByAle", linkApp: "https://pokemon-app-by-ale-ncp5.vercel.app", image: pokemonImg },
    { link: "https://github.com/AlexandroCamacho1000/WeatherAppByAle", image: weatherImg },
    { link: "https://github.com/AlexandroCamacho1000/To-DoAppByAle", image: todoImg },
    { link: "https://github.com/AlexandroCamacho1000/CalculatorAppByAle", image: calculatorImg },
  ];

  const items = t('projects.items');

  return (
    <section className="projects" id="projects">
      <h2 className="section-title" data-index="06">{t('projects.title')}</h2>
      <p className="section-subtitle">{t('projects.subtitle')}</p>
      <div className="projects-grid">
        {items.map((item, i) => (
          <ProjectCard key={i} {...item} {...meta[i]} />
        ))}
      </div>
    </section>
  );
}

export default Projects;