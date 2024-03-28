import React from "react";
import ReptilesContent from "../ReptilesContent";
import Sidebar from "../Sidebar";
import styles from "./ReptilesPage.module.css";

const ReptilesPage = () => {
  return (
    <>
      <div className={styles.reptilesPage}>
        <Sidebar />
        <ReptilesContent />
      </div>
    </>
  );
};

export default ReptilesPage;
