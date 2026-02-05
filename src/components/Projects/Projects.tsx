import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectModal from './ProjectModal/ProjectModal'
import styles from './Projects.module.scss'
import { projects } from './projectsData'

const Projects: React.FC = () => {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isHinting, setIsHinting] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setHasAnimated(true)
          setIsHinting(true)

          setTimeout(() => {
            setIsHinting(false)
            setShowSubtitle(true)
          }, 2000)

          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const goToNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
  }

  const goToPreviousProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id)
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    setSelectedProject(projects[prevIndex])
  }

  return (
    <section id="projects" className={styles.projectsSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.projects.title}</h2>
        <h3 className={`${styles.sectionSubtitle} ${showSubtitle ? styles.visible : ''}`}>
          {t.projects.subtitle}
        </h3>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={() => openModal(project)}
              isHinting={index === 0 && isHinting}
              hintText={t.projects.subtitle}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
          onNext={goToNextProject}
          onPrevious={goToPreviousProject}
        />
      )}
    </section>
  )
}

export default Projects
