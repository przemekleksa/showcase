import { useState } from 'react'
import styles from './ProofChip.module.scss'

const ProofChip = ({ text, details }: { text: string; details: string }) => {
  const [showDetails, setShowDetail] = useState(false)
  return (
    <>
      <div
        className={styles.proofChip}
        onClick={() => setShowDetail(!showDetails)}
        onKeyUp={() => setShowDetail(!showDetails)}
        onKeyDown={() => setShowDetail(!showDetails)}
      >
        {text}
      </div>
      {showDetails && <div className={styles.details}>{details}</div>}
    </>
  )
}

export default ProofChip
