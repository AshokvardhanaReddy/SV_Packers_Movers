import styles from "./NavbarItem.module.css";

const NavbarItem = ({ title, yCordi }) => {
  function handleScroll() {
    window.scrollTo(yCordi);
  }
  return (
    <>
      <div className={styles.navbar_item_div} onClick={handleScroll}>
        <p className = {styles.navbar_item_title} >{title}</p>
      </div>
    </>
  );
};

export default NavbarItem;
