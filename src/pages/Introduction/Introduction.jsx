import styles from "./Introduction.module.css";

import loadingImage from "../../assests/images/packers_movers_items_image.png";

import BackgroundContainer from "../../components/background-container/BackgroundContainer.jsx";
import Container from "../../components/container/Container.jsx";
import Heading from "../../components/Heading/Heading.jsx";
import Image from "../../components/image/Image.jsx";

const Introduction = () => {
  return (
    <>
      <BackgroundContainer>
        <Container>
          <div id={styles.container_div}>
            <h2 id={styles.welcome_text}>Welcome To</h2>
            <Heading heading="SRI VENKATESWARA" />
            <h3 id={styles.heading_h3}>PACKERS & MOVERS</h3>
            <p id={styles.content}>
              We provide the most convenient and safe relocation process for our
              valued customers.You're in for the best moving experience at. Our
              moving company will handle your move expertly, so you can kick
              back and relax.
            </p>
          </div>

          <div>
            <Image image={loadingImage} text="LoadingImage" />
          </div>
        </Container>
      </BackgroundContainer>
    </>
  );
};

export default Introduction;
