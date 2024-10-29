import "./BackgroundContainer.module.css";
import Heading from "../Heading/Heading";

const BackgroundContainer = ({ props, children }) => {
  return (
    <>
      <section>{children}</section>
    </>
  );
};

export default BackgroundContainer;
