import { useEffect, useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { trackEvent } from '../../utils/analytics'
import ProofChip from '../ProofChip/ProofChip'
import styles from './HeroSection.module.scss'
import ProfileImage from './ProfileImage/ProfileImage'
import TopBar from './TopBar/TopBar'

const HeroSection = () => {
  const { t } = useLanguage()
  const [isGlitching, setIsGlitching] = useState(true)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const runGlitchCycle = () => {
      // Animation duration (slowed down significantly)
      const glitchDuration = 3000
      // Random wait between 1s and 3s
      const randomWait = Math.random() * 2000 + 3000

      setIsGlitching(true)

      timeoutId = setTimeout(() => {
        setIsGlitching(false)
        timeoutId = setTimeout(runGlitchCycle, randomWait)
      }, glitchDuration)
    }

    const initialTimeout = setTimeout(runGlitchCycle, 1000)
    return () => {
      clearTimeout(timeoutId)
      clearTimeout(initialTimeout)
    }
  }, [])

  const handleScheduleCall = () => {
    // Check if it's mobile (touch device)
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (isMobile) {
      // On mobile, make a phone call
      window.location.href = 'tel:+48514230618'
    } else {
      // On desktop, scroll to contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const getButtonText = () => {
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    return isMobile ? t.hero.callMe : t.hero.scheduleCall
  }

  return (
    <section id="hero" className={styles.heroSection}>
      <TopBar />
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>{t.topBar.logoText}</h2>
          </div>
          <h1
            className={`${styles.headline} ${isGlitching ? styles.glitching : ''}`}
            data-text={t.hero.headline}
          >
            {t.hero.headline}
          </h1>
          <h2 className={styles.subheadline}>{t.hero.subheadline}</h2>
          <p className={styles.description}>{t.hero.description}</p>
          <ul className={styles.achievements}>
            {t.hero.achievements.map((achievement) => (
              <li key={achievement.text.slice(0, 10)}>
                <ProofChip text={achievement.text} details={achievement.details} />
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={styles.ctaButton}
            onClick={() => {
              trackEvent({
                category: 'Hero',
                action: 'click_cta',
                label: 'schedule_call',
              })
              handleScheduleCall()
            }}
          >
            {getButtonText()}
          </button>
        </div>
        <div className={styles.profileImage}>
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
