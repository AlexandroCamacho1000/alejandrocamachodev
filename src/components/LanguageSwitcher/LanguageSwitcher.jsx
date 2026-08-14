import "./LanguageSwitcher.css";
import { useLanguage } from "../../i18n/useLanguage";

const USFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40">
    <path d="M0 0h60v40H0z" fill="#B22234" />
    <path
      d="M0 7.7h60v4.6H0zm0 9.2h60v4.6H0zm0 9.2h60v4.6H0zm0 9.2h60v4.6H0z"
      fill="#fff"
    />
    <rect width="24" height="20.8" fill="#3C3B6E" />
    <g fill="#fff">
      <circle cx="3" cy="3" r="1.1" />
      <circle cx="9" cy="3" r="1.1" />
      <circle cx="15" cy="3" r="1.1" />
      <circle cx="21" cy="3" r="1.1" />
      <circle cx="6" cy="7" r="1.1" />
      <circle cx="12" cy="7" r="1.1" />
      <circle cx="18" cy="7" r="1.1" />
      <circle cx="3" cy="11" r="1.1" />
      <circle cx="9" cy="11" r="1.1" />
      <circle cx="15" cy="11" r="1.1" />
      <circle cx="21" cy="11" r="1.1" />
      <circle cx="6" cy="15" r="1.1" />
      <circle cx="12" cy="15" r="1.1" />
      <circle cx="18" cy="15" r="1.1" />
      <circle cx="3" cy="19" r="1.1" />
      <circle cx="9" cy="19" r="1.1" />
      <circle cx="15" cy="19" r="1.1" />
      <circle cx="21" cy="19" r="1.1" />
    </g>
  </svg>
);

const ESFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40">
    <path d="M0 0h60v40H0z" fill="#AA151B" />
    <path d="M0 10h60v20H0z" fill="#F1BF00" />
  </svg>
);

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher">
      <button
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-label="English"
        title="English"
      >
        <USFlag />
      </button>
      <button
        className={lang === "es" ? "active" : ""}
        onClick={() => setLang("es")}
        aria-label="Español"
        title="Español"
      >
        <ESFlag />
      </button>
    </div>
  );
}

export default LanguageSwitcher;
