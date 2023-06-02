import styles from './ContactForm.module.css';
import { Button } from "../Button/Button";
import { SendIcon } from '../icons/SendIcon';

export const ContactForm = () => {
  return (
    <form className={styles.form} method="POST" action="https://script.google.com/macros/s/AKfycbwIBuJuogIRNXLOD2x6MwzoGXflnVIrDbvwCyfzJujQUKp9TEGE--79Kp_HVB9Wf7da-w/exec">
      <div className={styles.nameEmailGroup}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input name="Name" id="name" type="text" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input name="Email" id="email" type="email" required />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="subject">Subject</label>
        <input name="Subject" id="subject" type="subject" required />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message">Message</label>
        <textarea name="Message" id="message" rows={10} required></textarea>
      </div>

      <div className={styles.submitButtonWrapper}>
        <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
        <Button
          type='submit'
          icon={<SendIcon />}
        >
          Send
        </Button>
      </div>

    </form>
  )
}