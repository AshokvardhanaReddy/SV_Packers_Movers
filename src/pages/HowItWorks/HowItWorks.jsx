import styles from "./HowItWorks.module.css";
import How_Works_Image from "../../assests/images/how_works_image.png";
import { howItWorks } from "../../data.js";

import BackgroundContainer from "../../components/background-container/BackgroundContainer";
import Heading from "../../components/Heading/Heading";
import Container from "../../components/container/Container";
import Image from "../../components/image/Image";
import Reference from "../../components/reference/Reference";

const HowItWorks = () => {
  return (
    <>
      <BackgroundContainer>
        <Heading heading="How It Works ?" />

        <Container>
          <div>
            <Image image={How_Works_Image} text="Image" />
          </div>

          <div className={styles.how_works_content_main_div}>
            {howItWorks.map((it) => (
              <Reference
                key={it.id}
                id={it.id}
                title={it.title}
                content={it.description}
              />
            ))}
          </div>
        </Container>
      </BackgroundContainer>
    </>
  );
};

export default HowItWorks;
