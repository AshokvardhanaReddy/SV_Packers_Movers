import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import NavbarItem from "../../components/navbar-item/NavbarItem";
import CompanyLogo from "../../components/company-logo/CompanyLogo";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [iconState, setIconState] = useState(true);

  const home = {
    top: 0,
    behavior: "smooth",
  };

  const about = {
    top: 450,
    behavior: "smooth",
  };

  const services = {
    top: 1000,
    behavior: "smooth",
  };

  const history = {
    top: 1870,
    behavior: "smooth",
  };
  const howItWorks = {
    top: 2300,
    behavior: "smooth",
  };
  const contact = {
    top: 3200,
    behavior: "smooth",
  };

  const handleIconChange = () => {
    setIconState((state) => !state);
  };

  const handleMenuStatus = () => {
    setIconState((state) => !state);
  };

  return (
    <>
      <nav className={styles.navbar_main}>
        <CompanyLogo />

        <div
          className={
            iconState
              ? `${styles.navbar_menu_div} ${styles.navbar_active}`
              : styles.navbar_menu_div
          }
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleMenuStatus}
          >
            <NavbarItem title="Home" yCordi={home} />
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleMenuStatus}
          >
            <NavbarItem title="About Us" yCordi={about} />
          </NavLink>
          <NavLink
            to="/srvices"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleMenuStatus}
          >
            <NavbarItem title="Services" yCordi={services} />
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleMenuStatus}
          >
            <NavbarItem title="History" yCordi={history} />
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleMenuStatus}
          >
            <NavbarItem title="How It Works ?" yCordi={howItWorks} />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={handleMenuStatus}
          >
            <NavbarItem title="Contact" yCordi={contact} />
          </NavLink>
        </div>

        <div className={styles.hamburger_menu_div} onClick={handleIconChange}>
          {!iconState ? <MdClose /> : <RxHamburgerMenu />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
