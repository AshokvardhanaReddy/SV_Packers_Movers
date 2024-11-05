import styles from "./Footer.module.css";
import { about, footerServices, findUs, followUs } from "../../data";

import BackgroundContainer from "../../components/background-container/BackgroundContainer";
import FooterContent from "../../components/footer-content/FooterContent";

const Footer = () => {
  return (
    <>
      <BackgroundContainer>
        <div className={styles.footer_main_div}>
          <FooterContent title="About" content={about} />
          <FooterContent title="Services" content={footerServices} />
          <FooterContent title="Find Us" content={findUs} />
          <FooterContent title="Follow Us" content={followUs} />
        </div>
        <br />
        <hr />
        <p className={styles.footer_copyright}>
          Copyright @ 2017 | All Rights Reserved | Designed by Ashokvardhan
        </p>
      </BackgroundContainer>
    </>
  );
};

export default Footer;
