import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <>
      <div id={styles.container}>{children}</div>
    </>
  );
};

export default Container;
