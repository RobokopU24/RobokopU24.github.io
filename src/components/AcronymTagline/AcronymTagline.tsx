import styles from './AcronymTagline.module.css';

export const AcronymTagline = () => {
  return (
    <p className={styles.acronymTagline}>
      <span className={styles.largeLetter}>a</span>rtificial{" "}
      <span className={styles.largeLetter}>i</span>ntelligence and the{" "}
      <span className={styles.largeLetter}>b</span>iological Sciences
    </p>
  )
}