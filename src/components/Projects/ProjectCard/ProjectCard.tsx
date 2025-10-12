import React, { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';
import { Project } from '../projectsData';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.projectCard} onClick={openModal}>
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
          <p className={styles.projectDescription}>
            {project.shortDescription}
          </p>
          <div className={styles.technologies}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ProjectCard;
