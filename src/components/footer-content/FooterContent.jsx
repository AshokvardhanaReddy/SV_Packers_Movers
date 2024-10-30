import styles from "./FooterContent.module.css";

const FooterContent = ({ title = "ashok", content }) => {
  return (
    <>
      <div className={styles.footer_content_div}>
        <h2>{title}</h2>

        {content !== undefined
          ? content.services.map((serv) => (
              <p className={styles.paragraph} key={serv.id}>
                {serv.service_title}
              </p>
            ))
          : undefined}
      </div>
    </>
  );
};

export default FooterContent;
