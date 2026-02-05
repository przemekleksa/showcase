import type React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Languages.module.scss'

const Languages: React.FC = () => {
  const { t } = useLanguage()

  const getFlagIcon = (languageName: string) => {
    switch (languageName.toLowerCase()) {
      case 'english':
      case 'angielski':
        return '🇬🇧'
      case 'polish':
      case 'polski':
        return '🇵🇱'
      default:
        return '🌍'
    }
  }

  return (
    <section id="languages" className={styles.languagesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.languages.title}</h2>
        <div className={styles.languagesGrid}>
          {t.languages.list.map((language, index) => (
            <div key={index} className={styles.languageCard}>
              <div className={styles.languageIcon}>
                <span className={styles.icon}>{getFlagIcon(language.name)}</span>
              </div>
              <div className={styles.languageContent}>
                <h3 className={styles.languageName}>{language.name}</h3>
                <div className={styles.languageLevel}>
                  <span className={styles.levelBadge}>{language.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
