import './EngineeringBackground.css';
import { FaBrain, FaServer, FaCode } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

const icons = [FaBrain, FaServer, FaCode];

function EngineeringBackground() {
  const { t } = useLanguage();
  const revealRef = useReveal();

  const blocks = [0, 1, 2].map((i) => ({
    title: t(`background.blocks.${i}.title`),
    tags: t(`background.blocks.${i}.tags`),
    Icon: icons[i],
  }));

  return (
    <section className="background" id="background">
      <div className="background-container" ref={revealRef}>
        <h2 className="section-title" data-index="02">
          {t('background.title')}
        </h2>
        <p className="section-subtitle">{t('background.subtitle')}</p>

        <div className="background-blocks">
          {blocks.map((block, index) => (
            <div className="background-block" key={index}>
              <div className="background-block-icon">
                <block.Icon />
              </div>
              <h3 className="background-block-title">{block.title}</h3>
              <div className="background-block-tags">
                {block.tags.map((tag, i) => (
                  <span className="background-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngineeringBackground;
