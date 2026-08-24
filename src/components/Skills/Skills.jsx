import './Skills.css';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

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
              {group.items.map((item) => (
                <li className="stack-item" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
