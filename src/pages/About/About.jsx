import styles from "./About.module.css";

import img from "../../assests/images/loader-image.png";

import BackgroundContainer from "../../components/background-container/BackgroundContainer";
import Container from "../../components/container/Container";
import Heading from "../../components/Heading/Heading";
import Image from "../../components/image/Image";

const About = () => {
  return (
    <>
      <BackgroundContainer>
        <Heading heading="About Us" />
        <Container>
          <div>
            <Image image={img} text="About Image" />
          </div>

          <div className={styles.about_text_div}>
            <p className={styles.about_para}>
              Sri Venkateswara Packers & Movers is one of the top packers in
              Ongole, Andhra Pradesh since 2015. We provides different types of
              Services that are affordable.
            </p>
            <p className={styles.about_para}>
              We offers unrivaled domestic relocation services as per your
              specific requirements. We make sure that your household shifting
              to and from any corner of India is absolutely hassle-free by
              deploying our distinctive and brilliant moving techniques.
            </p>
            <p className={styles.about_para}>
              We have designed our services proficiently to meet the maximum
              customer satisfaction, and rendered them in such a way that comes
              out high on the expectations of our clients.
            </p>
          </div>
        </Container>
      </BackgroundContainer>
    </>
  );
};

export default About;
