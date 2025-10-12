import { useEffect, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './TopBar.module.scss';

const TopBar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
            <a href="#hero" className={styles.navLink}>
              {t.topBar.hero}
            </a>
            <a href="#projects" className={styles.navLink}>
              {t.topBar.projects}
            </a>
            <a href="#impact" className={styles.navLink}>
              {t.topBar.impact}
            </a>
            <a href="#skills" className={styles.navLink}>
              {t.topBar.skills}
            </a>
            <a href="#about" className={styles.navLink}>
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
          <a href="#hero" className={styles.mobileNavLink} onClick={closeMenu}>
            {t.topBar.hero}
          </a>
          <a
            href="#projects"
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {t.topBar.projects}
          </a>
          <a
            href="#impact"
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {t.topBar.impact}
          </a>
          <a
            href="#skills"
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {t.topBar.skills}
          </a>
          <a href="#about" className={styles.mobileNavLink} onClick={closeMenu}>
            {t.topBar.about}
          </a>
          <button
            type="button"
            className={styles.mobileNavButton}
            onClick={closeMenu}
          >
            {t.topBar.contact}
          </button>
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
        </nav>
      </div>
    </>
  );
};

export default TopBar;
