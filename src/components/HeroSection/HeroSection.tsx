import { useLanguage } from '../../contexts/LanguageContext';
import styles from './HeroSection.module.scss';
import ProfileImage from './ProfileImage/ProfileImage';
import TopBar from './TopBar/TopBar';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.heroSection}>
      <TopBar />
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.headline}>{t.hero.headline}</h1>
          <p className={styles.description}>{t.hero.description}</p>
          <button type="button" className={styles.ctaButton}>
            {t.hero.scheduleCall}
          </button>
        </div>
        <ProfileImage />
      </div>
    </section>
  );
};

export default HeroSection;
