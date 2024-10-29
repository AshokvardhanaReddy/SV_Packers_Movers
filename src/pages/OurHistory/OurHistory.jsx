import styles from "./OurHistory.module.css";
import { history } from "../../data.js";

import Heading from "../../components/Heading/Heading";
import BackgroundContainer from "../../components/background-container/BackgroundContainer.jsx";
import History from "../../components/history/History.jsx";

const OurHistory = () => {
  return (
    <>
      <BackgroundContainer>
        <Heading heading="Our History" />
        <div className={styles.history_main_div}>
          {history.map((histo) => (
            <History
              key={histo.id}
              image={histo.image}
              title={histo.title}
              content={histo.description}
            />
          ))}
        </div>
      </BackgroundContainer>
    </>
  );
};

export default OurHistory;
