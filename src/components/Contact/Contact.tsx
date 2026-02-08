import type React from 'react'
import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import styles from './Contact.module.scss'

const Contact: React.FC = () => {
  const { t } = useLanguage()
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedLabel(label)
    setTimeout(() => {
      setCopiedLabel(null)
    }, 2000)
  }

  const contactInfo = [
    {
      id: 'email',
      icon: '📧',
      label: t.contact.email,
      value: (
        <>
          przemyslawleksa
          <wbr />
          @gmail.com
        </>
      ),
      link: 'mailto:przemyslawleksa@gmail.com',
      canCopy: true,
      copyValue: 'przemyslawleksa@gmail.com',
    },
    {
      id: 'phone',
      icon: '📱',
      label: t.contact.phone,
      value: '+48 514 230 618',
      link: 'tel:+48514230618',
      canCopy: true,
      copyValue: '+48514230618',
    },
    {
      id: 'location',
      icon: '📍',
      label: t.contact.location,
      value: 'Cracow, Poland',
      link: null,
      canCopy: false,
    },
    {
      id: 'linkedin',
      icon: '💼',
      label: t.contact.linkedin,
      value: 'linkedin.com/in/pleksa',
      link: 'https://linkedin.com/in/pleksa',
      canCopy: true,
      copyValue: 'https://linkedin.com/in/pleksa',
    },
  ]

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
        <p className={styles.sectionSubtitle}>{t.contact.subtitle}</p>

        <div className={styles.contactGrid}>
          {contactInfo.map((item) => (
            <div key={item.label} className={styles.contactCard}>
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={styles.cardLink}
                  data-gtm-id={`contact-link-${item.id}`}
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
                <div className={styles.cardLink}>
                  <div className={styles.contactIcon}>
                    <span className={styles.icon}>{item.icon}</span>
                  </div>
                  <div className={styles.contactContent}>
                    <h3 className={styles.contactLabel}>{item.label}</h3>
                    <span className={styles.contactValue}>{item.value}</span>
                  </div>
                </div>
              )}

              {item.canCopy && (
                <button
                  type="button"
                  className={styles.copyButton}
                  onClick={() =>
                    handleCopy(
                      item.copyValue || (typeof item.value === 'string' ? item.value : ''),
                      item.label
                    )
                  }
                  title="Copy to clipboard"
                  data-gtm-id={`contact-copy-${item.id}`}
                >
                  {copiedLabel === item.label ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.copyIconSuccess}
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
