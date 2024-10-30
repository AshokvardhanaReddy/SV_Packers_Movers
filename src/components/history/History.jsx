import styles from "./History.module.css";


const History = ({ image, title, content }) => {
  return (
    <>
      <div className={styles.history_div}>
        <img className={styles.image} src={image} alt="image" />
        <h2 className={styles.heading_h2}>{title}</h2>
        <h3>{content}</h3>
      </div>
    </>
  );
};

export default History;
