import "./BackgroundContainer.module.css";

const BackgroundContainer = ({ props, children }) => {
  return (
    <>
      <section>{children}</section>
    </>
  );
};

export default BackgroundContainer;
