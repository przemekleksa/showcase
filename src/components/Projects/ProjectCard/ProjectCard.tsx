import { useLanguage } from '../../../contexts/LanguageContext'
import type { Project } from '../projectsData'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
  onOpenModal: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const { language } = useLanguage()

  return (
    <button type="button" className={styles.projectCard} onClick={onOpenModal}>
      <div className={styles.screenshot}>
        {project.screenshots && project.screenshots.length > 0 ? (
          <img
            src={project.screenshots[0]}
            alt={`${project.name} screenshot`}
            className={styles.screenshotImage}
          />
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
