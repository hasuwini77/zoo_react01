import React from "react";
import styles from "./Header.module.css";
import { getImageURL } from "../../utils/functions";

const Header = ({ img }) => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.headerImg} src={getImageURL(img)} alt={img} />
      </div>
      <div className={styles.mainHeader}>
        <h1> Australian Zoo</h1>
        <p>Cool Animals </p>
      </div>
    </header>
  );
};

export default Header;
