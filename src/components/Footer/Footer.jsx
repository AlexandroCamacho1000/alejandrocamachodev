import './Footer.css';
import { useLanguage } from '../../i18n/useLanguage';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">{t('footer.name')}</p>
        <p className="footer-role">{t('footer.role')}</p>
        <p className="footer-copy">{t('footer.copy')}</p>
      </div>
    </footer>
  );
}

export default Footer;
