import styles from "./Image.module.css";

const Image = ({ image, text }) => {
  return (
    <>
      <img className={styles.image} src={image} alt={text} />
    </>
  );
};

export default Image;
