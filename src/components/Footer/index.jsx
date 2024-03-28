import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p>Copyright ®{currentYear}</p>
    </div>
  );
};

export default Footer;
