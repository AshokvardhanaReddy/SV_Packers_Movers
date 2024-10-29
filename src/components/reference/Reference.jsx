import styles from "./Reference.module.css";

const Reference = ({ id, title, content }) => {
  return (
    <>
      <div className={styles.reference_main_div}>
        <div className={styles.number_div}>
          <h2 className={styles.number}>{id}</h2>
        </div>

        <div className={styles.text_div}>
          <h3 className={styles.heading_h3}>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Reference;
