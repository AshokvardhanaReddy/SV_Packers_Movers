import styles from "./Navbar.module.css";

import NavbarItem from "../../components/navbar-item/NavbarItem";
import CompanyLogo from "../../components/company-logo/CompanyLogo";

import { NavLink } from "react-router-dom";

const Navbar = () => {
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
  return (
    <>
      <nav>
        <div className={styles.navbar_container}>
          <div>
            <CompanyLogo />
          </div>

          <div className={styles.navbar_menu_div}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <NavbarItem title="Home" yCordi={home} />
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <NavbarItem title="About Us" yCordi={about} />
            </NavLink>
            <NavLink
              to="/srvices"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <NavbarItem title="Services" yCordi={services} />
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <NavbarItem title="History" yCordi={history} />
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <NavbarItem title="How It Works ?" yCordi={howItWorks} />
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <NavbarItem title="Contact" yCordi={contact} />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
