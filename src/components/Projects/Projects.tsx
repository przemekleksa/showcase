import type React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './Projects.module.scss';
import { projects } from './projectsData';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
