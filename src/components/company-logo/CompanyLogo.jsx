import styles from "./CompanyLogo.module.css";
import logo from "../../assests/images/companyLogo.png";

const CompanyLogo = () => {
  return (
    <>
      <div className={styles.company_main_div}>
        <img
          className={styles.company_logo_image}
          src={logo}
          alt="Company Logo"
        />
        <div className={styles.company_logo_text_div}>
          <h2>Quality</h2>
          <h3>Packers & Movers</h3>
        </div>
      </div>
    </>
  );
};

export default CompanyLogo;
