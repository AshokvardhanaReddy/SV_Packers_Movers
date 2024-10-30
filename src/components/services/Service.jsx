import styles from "./Service.module.css";


const Service = ({ image, title, content }) => {
  return (
    <>
      <div className={styles.service_div}>
        <img className={styles.image} src={image} alt="service_image" />
        <h2 className={styles.heading_h2}>{title}</h2>
        <p className={styles.paragraph}>{content}</p>
      </div>
    </>
  );
};

export default Service;
