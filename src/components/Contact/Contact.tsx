import type React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Contact.module.scss'

const Contact: React.FC = () => {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: '📧',
      label: t.contact.email,
      value: 'przemyslawleksa@gmail.com',
      link: 'mailto:przemyslawleksa@gmail.com',
    },
    {
      icon: '📱',
      label: t.contact.phone,
      value: '+48 514 230 618',
      link: 'tel:+48514230618',
    },
    {
      icon: '📍',
      label: t.contact.location,
      value: 'Cracow, Poland',
      link: null,
    },
    {
      icon: '💼',
      label: t.contact.linkedin,
      value: 'linkedin.com/in/pleksa',
      link: 'https://linkedin.com/in/pleksa',
    },
  ]

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
        <p className={styles.sectionSubtitle}>{t.contact.subtitle}</p>

        <div className={styles.contactGrid}>
          {contactInfo.map((item) =>
            item.link ? (
              <a
                key={item.label}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={styles.contactCard}
              >
                <div className={styles.contactIcon}>
                  <span className={styles.icon}>{item.icon}</span>
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactLabel}>{item.label}</h3>
                  <span className={styles.contactValue}>{item.value}</span>
                </div>
              </a>
            ) : (
              <div key={item.label} className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <span className={styles.icon}>{item.icon}</span>
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactLabel}>{item.label}</h3>
                  <span className={styles.contactValue}>{item.value}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
