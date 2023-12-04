import styles from "./OverviewSummary.module.css";

export const OverviewSummary = () => {
  return (
    <p className={styles.summary}>
      ROBOKOP is an open-source, modular, knowledge graph (KG)–based system that
      includes several key components: a biomedical KG; a user interface and
      associated question-builder tool; a collection of harmonized and
      interoperable knowledge sources, represented as KGs in a service called
      Automat and accessible via application programming interfaces; and a
      variety of supporting resources, including reasoning algorithms and tools
      to support deep exploration of the ROBOKOP KG and the Automat KGs. The
      ROBOKOP question-building tool allows users to construct queries, submit
      them to ROBOKOP, and receive scored-and-ranked answers that can be
      dynamically explored. The ROBOKOP Automat allows for programmatic access
      to the ROBOKOP KG and the Automat collection of harmonized biomedical KGs.
    </p>
  );
};
