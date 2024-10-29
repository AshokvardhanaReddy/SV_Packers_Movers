import styles from "./History.module.css";
import image_1 from "../../assests/images/history_image_1.jpg";

const History = ({ image, title, content }) => {
  return (
    <>
      <div className={styles.history_div}>
        <img className={styles.image} src={image} />
        <h2 className={styles.heading_h2}>{title}</h2>
        <h3>{content}</h3>
      </div>
    </>
  );
};

export default History;
