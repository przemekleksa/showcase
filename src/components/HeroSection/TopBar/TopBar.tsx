import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './TopBar.module.scss';

const TopBar = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <header className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>PL</div>
          <span className={styles.logoText}>{t.topBar.logoText}</span>
        </div>

        <nav className={styles.navigation}>
          <a href="#pricing" className={styles.navLink}>
            {t.topBar.pricing}
          </a>
          <a href="#newsletter" className={styles.navLink}>
            {t.topBar.newsletter}
          </a>
          <button type="button" className={styles.navButton}>
            {t.topBar.scheduleCall}
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
      </div>
    </header>
  );
};

export default TopBar;
