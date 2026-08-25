import './DevTools.css';
import { SiClaude, SiGithubcopilot, SiOpenai } from 'react-icons/si';
import { FaICursor, FaTerminal } from 'react-icons/fa';
import { useLanguage } from '../../i18n/useLanguage';
import { useReveal } from '../../hooks/useReveal';

const TOOL_ICONS = {
  'GitHub Copilot': { Icon: SiGithubcopilot, color: 'var(--text-primary)' },
  Cursor: { Icon: FaICursor, color: 'var(--text-primary)' },
  OpenCode: { Icon: FaTerminal, color: 'var(--accent)' },
  'Claude Code': { Icon: SiClaude, color: '#D97757' },
  ChatGPT: { Icon: SiOpenai, color: '#10A37F' },
};

function DevTools() {
  const { t } = useLanguage();
  const ref = useReveal();
  const items = t('tools.items');

  return (
    <section className="devtools" id="devtools">
      <div className="devtools-inner" ref={ref}>
        <h2 className="devtools-title">{t('tools.title')}</h2>
        <p className="devtools-subtitle">{t('tools.subtitle')}</p>

        <ul className="devtools-list">
          {items.map((item) => {
            const meta = TOOL_ICONS[item];
            return (
              <li className="devtools-item" key={item}>
                {meta && (
                  <span className="devtools-item-icon" style={{ color: meta.color }}>
                    <meta.Icon />
                  </span>
                )}
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default DevTools;
