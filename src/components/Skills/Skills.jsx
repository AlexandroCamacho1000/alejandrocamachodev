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
          <div className="stack-card" key={group.num}>
            <div className="stack-card-header">
              <span className="stack-card-num">{group.num}</span>
              <h3 className="stack-card-title">{group.title}</h3>
            </div>
            <div className="stack-card-items">
              {group.items.map((item) => (
                <span className="stack-item" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
