import type React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Skills.module.scss'
import { skillsData } from './skillsData'

const Skills: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.skills.title}</h2>
        <div className={styles.skillsGrid}>
          {skillsData.map((category) => (
            <div key={category.id} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>
                  {t.skills[category.name as keyof typeof t.skills]}
                </h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
