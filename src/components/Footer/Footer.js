import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const year = () => {
    const d = new Date();
    let y = d.getFullYear();
    return y;
  };

  return (
    <div className={styles.footer}>
      <p className="copyright">
        © <span className="year">{year()}</span> -{" "}
        <span className="bold"> JobSite</span>
      </p>
    </div>
  );
}

export default Footer;
