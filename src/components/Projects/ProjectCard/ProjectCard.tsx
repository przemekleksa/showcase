import { useLanguage } from '../../../contexts/LanguageContext'
import type { Project } from '../projectsData'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
  onOpenModal: () => void
  isHinting?: boolean
  hintText?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal, isHinting, hintText }) => {
  const { language } = useLanguage()

  return (
    <button
      type="button"
      className={`${styles.projectCard} ${isHinting ? styles.hinting : ''}`}
      onClick={onOpenModal}
    >
      {/* Overlay for hinting animation */}
      <div className={styles.overlay}>
        <span className={styles.hintText}>{hintText}</span>
      </div>

      <div className={styles.screenshot}>
        {project.screenshots && project.screenshots.length > 0 ? (
          <picture>
            <source
              srcSet={project.screenshots[0].replace(/\.(jpg|jpeg|png)$/, '.webp')}
              type="image/webp"
            />
            <img
              src={project.screenshots[0]}
              alt={`${project.name} screenshot`}
              className={styles.screenshotImage}
            />
          </picture>
        ) : (
          <div className={styles.placeholderImage}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderText}>Screenshot</span>
            </div>
          </div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectName}>{project.name}</h3>
        <p className={styles.projectDescription}>{project.shortDescription[language]}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

export default ProjectCard
