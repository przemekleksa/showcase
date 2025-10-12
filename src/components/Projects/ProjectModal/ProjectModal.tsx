import type React from 'react';
import { useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import ProjectGallery from '../ProjectGallery/ProjectGallery';
import type { Project } from '../projectsData';
import styles from './ProjectModal.module.scss';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          <span className={styles.closeLine} />
          <span className={styles.closeLine} />
        </button>

        <ProjectGallery screenshots={project.screenshots} />

        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>{project.name}</h2>
          <p className={styles.modalDescription}>{project.description}</p>

          <div className={styles.modalRole}>
            <h3 className={styles.roleTitle}>{t.projects.myRole}</h3>
            <p className={styles.roleDescription}>{project.role}</p>
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
            <h3 className={styles.achievementsTitle}>
              {t.projects.achievements}
            </h3>
            <ul className={styles.achievementsList}>
              {project.achievements.map((achievement, index) => (
                <li key={index} className={styles.achievementItem}>
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
                {t.projects.viewLive}
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
  );
};

export default ProjectModal;
