import React, { useState } from 'react';
import styles from './ProjectGallery.module.scss';

interface ProjectGalleryProps {
  screenshots: string[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

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
    );
  }

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.mainImage} onClick={openFullscreen}>
          <img
            src={screenshots[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <span className={styles.zoomIcon}>🔍</span>
          </div>
        </div>

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
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.active : ''
                  }`}
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
        <div className={styles.fullscreenOverlay} onClick={closeFullscreen}>
          <div
            className={styles.fullscreenContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeFullscreen}
            >
              ✕
            </button>
            <img
              src={screenshots[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className={styles.fullscreenImage}
            />
            {screenshots.length > 1 && (
              <div className={styles.fullscreenNavigation}>
                <button
                  type="button"
                  className={styles.fullscreenNavButton}
                  onClick={prevImage}
                >
                  ‹
                </button>
                <span className={styles.imageCounter}>
                  {currentIndex + 1} / {screenshots.length}
                </span>
                <button
                  type="button"
                  className={styles.fullscreenNavButton}
                  onClick={nextImage}
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
