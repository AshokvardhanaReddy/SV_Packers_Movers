import styles from "./NavbarItem.module.css";
import HomeIcon from "../../assests/images/raining.png";

const NavbarItem = ({ title, yCordi }) => {
  function handleScroll() {
    window.scrollTo(yCordi);
  }
  return (
    <>
      <div className={styles.navbar_item_div} onClick={handleScroll}>
        <img src={HomeIcon} alt="Home Icon" />
        <p>{title}</p>
      </div>
    </>
  );
};

export default NavbarItem;
