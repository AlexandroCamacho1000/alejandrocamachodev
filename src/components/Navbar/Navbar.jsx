import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../public/logoaledev26.png";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useLanguage } from "../../i18n/useLanguage";
import { FaBars, FaTimes } from "react-icons/fa";

const SECTION_IDS = [
  "hero",
  "projects",
  "experience",
  "background",
  "skills",
  "education",
  "contact",
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  const links = SECTION_IDS.map((id) => ({
    id,
    label: t(`nav.${id}`),
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id));
    const onScroll = () => {
      let current = "hero";
      sections.forEach((sec) => {
        if (sec && window.scrollY >= sec.offsetTop - 140) {
          current = sec.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <a href="#hero" className="navbar-logo-link">
          <div className="navbar-logo-box">
            <img src={logo} alt="AleSoft Logo" />
          </div>
          <span className="navbar-logo-dot" />
        </a>
      </div>
      <ul className={`navbar-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <ThemeToggle />
        <LanguageSwitcher />
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
