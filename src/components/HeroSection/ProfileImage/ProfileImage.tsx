import React from 'react';
import styles from './ProfileImage.module.scss';

const ProfileImage: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.decorativeElements}>
        <div className={styles.orbit1}></div>
        <div className={styles.orbit2}></div>
        <div className={styles.star1}></div>
        <div className={styles.star2}></div>
        <div className={styles.star3}></div>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.profileImage}>
          {/* Placeholder for profile image - you can replace with actual image */}
          <div className={styles.placeholderImage}>
            <div className={styles.face}>
              <div className={styles.eyes}>
                <div className={styles.eye}></div>
                <div className={styles.eye}></div>
              </div>
              <div className={styles.nose}></div>
              <div className={styles.mouth}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
