import type React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Courses.module.scss'

const Courses: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="courses" className={styles.coursesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.courses.title}</h2>
        <div className={styles.coursesGrid}>
          {t.courses.list.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.courseIcon}>
                <span className={styles.icon}>🎓</span>
              </div>
              <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{course}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
