import styles from './OverviewSummary.module.css';

export const OverviewSummary = () => {
  return (
    <p className={styles.summary}>
      ROBOKOP is an open-source, knowledge graph–based, biomedical question-answering
      system that derives answers to user questions by applying reasoning algorithms to integrated and
      semantically harmonized biomedical knowledge sources. ROBOKOP is comprised of two main components: a
      ROBOKOP user interface or question-building tool; and ROBOKOP. The ROBOKOP question-building tool allows
      users to construct queries, submit them to ROBOKOP, and receive scored-and-ranked answers that can be
      dynamically explored. ROBOKOP Automat allows for programmatic access to the ROBOKOP KG and to a collection
      of harmonized biomedical KGs derived from various knowledge or data sources.
    </p>
  )
}
