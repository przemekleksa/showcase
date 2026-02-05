import { useState } from 'react'
import styles from './ProofChip.module.scss'

const ProofChip = ({ text, details }: { text: string; details: string }) => {
  const [showDetails, setShowDetail] = useState(false)
  return (
    <>
      <button
        type="button"
        className={styles.proofChip}
        onClick={() => setShowDetail(!showDetails)}
        aria-expanded={showDetails}
      >
        {text}
        <svg
          className={`${styles.chevron} ${showDetails ? styles.chevronOpen : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {showDetails && <div className={styles.details}>{details}</div>}
    </>
  )
}

export default ProofChip
