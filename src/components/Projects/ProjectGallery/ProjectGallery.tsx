import type React from 'react'
import { useState } from 'react'
import styles from './ProjectGallery.module.scss'

interface ProjectGalleryProps {
  screenshots: string[]
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  // Swipe handling for gallery
  const minSwipeDistance = 10

  const onTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation() // Prevent modal swipe
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const onTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation() // Prevent modal swipe
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    })
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation() // Prevent modal swipe

    if (!touchStart || !touchEnd) return

    const deltaX = touchStart.x - touchEnd.x
    const deltaY = touchStart.y - touchEnd.y

    // Check if horizontal movement is greater than vertical (swipe vs scroll)
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY)

    if (!isHorizontalSwipe) return // Ignore vertical scrolling

    const isLeftSwipe = deltaX > minSwipeDistance
    const isRightSwipe = deltaX < -minSwipeDistance

    if (isLeftSwipe && screenshots.length > 1) {
      nextImage()
    }
    if (isRightSwipe && screenshots.length > 1) {
      prevImage()
    }
  }

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <div className={styles.placeholderImage}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderText}>Screenshot</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={styles.gallery}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          className={styles.mainImage}
          onClick={openFullscreen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              openFullscreen()
            }
          }}
        >
          <img
            src={screenshots[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <span className={styles.zoomIcon}>🔍</span>
          </div>
        </button>

        {screenshots.length > 1 && (
          <div className={styles.navigation}>
            <button
              type="button"
              className={styles.navButton}
              onClick={prevImage}
              disabled={screenshots.length <= 1}
            >
              ‹
            </button>
            <div className={styles.dots}>
              {screenshots.map((screenshot, index) => (
                <button
                  key={`dot-${screenshot}`}
                  type="button"
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.navButton}
              onClick={nextImage}
              disabled={screenshots.length <= 1}
            >
              ›
            </button>
          </div>
        )}
      </div>

      {isFullscreen && (
        <button
          type="button"
          className={styles.fullscreenOverlay}
          onClick={closeFullscreen}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closeFullscreen()
            }
          }}
        >
          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button type="button" className={styles.closeButton} onClick={closeFullscreen}>
              ✕
            </button>
            <img
              src={screenshots[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className={styles.fullscreenImage}
            />
            {screenshots.length > 1 && (
              <div className={styles.fullscreenNavigation}>
                <button type="button" className={styles.fullscreenNavButton} onClick={prevImage}>
                  ‹
                </button>
                <span className={styles.imageCounter}>
                  {currentIndex + 1} / {screenshots.length}
                </span>
                <button type="button" className={styles.fullscreenNavButton} onClick={nextImage}>
                  ›
                </button>
              </div>
            )}
          </div>
        </button>
      )}
    </>
  )
}

export default ProjectGallery
