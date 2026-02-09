import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import ProjectGallery from '../ProjectGallery/ProjectGallery'
import type { Project } from '../projectsData'
import styles from './ProjectModal.module.scss'

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) => {
  const { t, language } = useLanguage()
  const modalRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)

  // Minimum distance for swipe detection - very low for instant response
  const minSwipeDistance = 10

  useEffect(() => {
    if (isOpen) {
      // Block body scroll
      document.body.style.overflow = 'hidden'

      return () => {
        // Restore body styles
        document.body.style.overflow = 'unset'
      }
    }

    // Ensure body is scrollable when modal is closed
    document.body.style.overflow = 'unset'
  }, [isOpen])

  // Scroll to top when project changes - instant, no animation
  useEffect(() => {
    if (modalRef.current && isOpen) {
      modalRef.current.scrollTop = 0
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const deltaX = touchStart.x - touchEnd.x
    const deltaY = touchStart.y - touchEnd.y

    // Check if horizontal movement is greater than vertical (swipe vs scroll)
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY)

    if (!isHorizontalSwipe) return // Ignore vertical scrolling

    const isLeftSwipe = deltaX > minSwipeDistance
    const isRightSwipe = deltaX < -minSwipeDistance

    if (isLeftSwipe) {
      onNext()
    }
    if (isRightSwipe) {
      onPrevious()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }}
    >
      <button type="button" className={styles.closeButton} onClick={onClose}>
        <span className={styles.closeLine} />
        <span className={styles.closeLine} />
      </button>

      <div
        ref={modalRef}
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ProjectGallery screenshots={project.screenshots || []} />

        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>{project.name}</h2>
          <p className={styles.modalDescription}>{project.description[language]}</p>

          <div className={styles.modalRole}>
            <h3 className={styles.roleTitle}>{t.projects.myRole}</h3>
            <p className={styles.roleDescription}>{project.role[language]}</p>
          </div>

          <div className={styles.modalTechnologies}>
            <h3 className={styles.techTitle}>{t.projects.technologies}</h3>
            <div className={styles.techTags}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.modalAchievements}>
            <h3 className={styles.achievementsTitle}>{t.projects.achievements}</h3>
            <ul className={styles.achievementsList}>
              {project.achievements[language].map((achievement) => (
                <li key={achievement} className={styles.achievementItem}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.modalLinks}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveLink}
              >
                {project.liveUrlLabel ? project.liveUrlLabel[language] : t.projects.viewLive}
              </a>
            )}
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.appStoreLink}
              >
                <span className={styles.appStoreIcon}>📱</span>
                App Store
              </a>
            )}
            {project.githubUrl && !project.githubHidden && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                {t.projects.viewCode}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
