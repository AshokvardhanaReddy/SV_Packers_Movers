import styles from "./CompanyLogo.module.css";
import logo from "../../assests/images/raining.png";

const CompanyLogo = () => {
  return (
    <>
      <div className={styles.company_main_div}>
        <img className={styles.company_logo_image} src={logo} />
        <div className={styles.company_logo_text_div}>
          <h2>Sri Venkateswara</h2>
          <h3>Packers & Movers</h3>
        </div>
      </div>
    </>
  );
};

export default CompanyLogo;