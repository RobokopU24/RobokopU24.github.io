import styles from "./OverviewSummary.module.css";
import About from "../../content/about.mdx"

export const OverviewSummary = () => {
  return (
    <div className={styles.summary}>
      <About />
    </div>
  );
};
