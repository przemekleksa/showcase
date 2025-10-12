import { useCallback, useEffect, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useTheme } from '../../../contexts/ThemeContext';
import styles from './TopBar.module.scss';

const TopBar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topbarHeight = 80; // Approximate height of fixed topbar
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  // Prevent body scroll when menu is open and handle Escape key
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeMenu();
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <header className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>PL</div>
            <span className={styles.logoText}>{t.topBar.logoText}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNavigation}>
            <a
              href="#hero"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              {t.topBar.hero}
            </a>
            <a
              href="#projects"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              {t.topBar.projects}
            </a>
            <a
              href="#impact"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, '#impact')}
            >
              {t.topBar.impact}
            </a>
            <a
              href="#skills"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, '#skills')}
            >
              {t.topBar.skills}
            </a>
            <a
              href="#about"
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, '#about')}
            >
              {t.topBar.about}
            </a>
            <button type="button" className={styles.navButton}>
              {t.topBar.contact}
            </button>
            <button
              type="button"
              className={styles.languageButton}
              onClick={toggleLanguage}
              title={t.common.language}
            >
              {language === 'pl' ? 'EN' : 'PL'}
            </button>
            <button
              type="button"
              className={styles.themeButton}
              onClick={toggleTheme}
              title={
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`${styles.hamburger} ${
              isMenuOpen ? styles.hamburgerOpen : ''
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside of header */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          isMenuOpen ? styles.mobileMenuOpen : ''
        }`}
        onClick={handleOverlayClick}
      >
        {/* Close Button inside overlay */}
        <button
          type="button"
          className={`${styles.closeButton} ${
            isMenuOpen ? styles.closeButtonVisible : ''
          }`}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span className={styles.closeLine} />
          <span className={styles.closeLine} />
        </button>

        <nav className={styles.mobileNavigation}>
          <a
            href="#hero"
            className={styles.mobileNavLink}
            onClick={(e) => {
              handleNavClick(e, '#hero');
              closeMenu();
            }}
          >
            {t.topBar.hero}
          </a>
          <a
            href="#projects"
            className={styles.mobileNavLink}
            onClick={(e) => {
              handleNavClick(e, '#projects');
              closeMenu();
            }}
          >
            {t.topBar.projects}
          </a>
          <a
            href="#impact"
            className={styles.mobileNavLink}
            onClick={(e) => {
              handleNavClick(e, '#impact');
              closeMenu();
            }}
          >
            {t.topBar.impact}
          </a>
          <a
            href="#skills"
            className={styles.mobileNavLink}
            onClick={(e) => {
              handleNavClick(e, '#skills');
              closeMenu();
            }}
          >
            {t.topBar.skills}
          </a>
          <a
            href="#about"
            className={styles.mobileNavLink}
            onClick={(e) => {
              handleNavClick(e, '#about');
              closeMenu();
            }}
          >
            {t.topBar.about}
          </a>
          <button
            type="button"
            className={styles.mobileNavButton}
            onClick={closeMenu}
          >
            {t.topBar.contact}
          </button>
          <div className={styles.mobileLanguageThemeContainer}>
            <button
              type="button"
              className={styles.mobileLanguageButton}
              onClick={() => {
                toggleLanguage();
              }}
              title={t.common.language}
            >
              {language === 'pl' ? 'EN' : 'PL'}
            </button>
            <button
              type="button"
              className={styles.mobileThemeButton}
              onClick={() => {
                toggleTheme();
              }}
              title={
                theme === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              }
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TopBar;
