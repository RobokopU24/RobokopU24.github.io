import styles from './InternalLinkIcon.module.css';

interface InternalLinkIconProps {
  color?: string;
}

export const InternalLinkIcon = ({ color }: InternalLinkIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ stroke: color }}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.icon}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}