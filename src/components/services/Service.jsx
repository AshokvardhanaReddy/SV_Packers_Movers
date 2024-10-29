import styles from "./Service.module.css";

// import image from '../../assests/images/service_image_1.png';

const Service = ({ image, title, content }) => {
  return (
    <>
      <div className={styles.service_div}>
        <img className={styles.image} src={image} alt="image" />
        <h2 className={styles.heading_h2}>{title}</h2>
        <p className={styles.paragraph}>{content}</p>
      </div>
    </>
  );
};

export default Service;
