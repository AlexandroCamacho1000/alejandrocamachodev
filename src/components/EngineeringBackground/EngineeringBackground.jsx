import './EngineeringBackground.css';
import { FaGraduationCap, FaNetworkWired, FaServer, FaCode } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

const icons = [FaGraduationCap, FaNetworkWired, FaServer, FaCode];

function EngineeringBackground() {
  const { t } = useLanguage();
  const revealRef = useReveal();

  const steps = [0, 1, 2, 3].map((i) => ({
    title: t(`background.steps.${i}.title`),
    description: t(`background.steps.${i}.description`),
    Icon: icons[i],
  }));

  return (
    <section className="background" id="background">
      <div className="background-container" ref={revealRef}>
        <h2 className="section-title" data-index="04">
          {t('background.title')}
        </h2>
        <p className="section-subtitle">{t('background.subtitle')}</p>

        <div className="background-steps">
          {steps.map((step, index) => (
            <div className="background-step" key={index}>
              <div className="background-step-icon">
                <step.Icon />
              </div>
              <div className="background-step-content">
                <span className="background-step-index">
                  0{index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngineeringBackground;