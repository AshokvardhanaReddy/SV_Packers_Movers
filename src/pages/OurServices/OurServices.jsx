import style from "./OurServices.module.css";
import { ourServices } from "../../data";

import BackgroundContainer from "../../components/background-container/BackgroundContainer";
import Heading from "../../components/Heading/Heading";
import Service from "../../components/services/Service";

const OurServices = () => {
  return (
    <>
      <BackgroundContainer>
        <Heading heading="Our Services" />
        <div className={style.our_services_main_div}>
          {ourServices.map((e) => (
            <Service
              key={e.id}
              image={e.image}
              title={e.title}
              content={e.description}
            />
          ))}
        </div>
      </BackgroundContainer>
    </>
  );
};

export default OurServices;
