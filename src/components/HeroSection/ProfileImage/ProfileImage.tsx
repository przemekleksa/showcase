import profileImage from '../../../assets/images/me.png'
import styles from './ProfileImage.module.scss'

const ProfileImage = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.decorativeElements}>
        <div className={styles.orbit1} />
        <div className={styles.orbit2} />
        <div className={styles.star1} />
        <div className={styles.star2} />
        <div className={styles.star3} />
        <div className={styles.circle1} />
        <div className={styles.circle2} />
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.profileImage}>
          <img src={profileImage} alt="Przemysław Leksa" className={styles.profileImg} />
        </div>
      </div>
    </div>
  )
}

export default ProfileImage
