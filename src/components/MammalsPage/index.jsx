import React from "react";
import MammalsContent from "../MammalsContent";
import Sidebar from "../Sidebar";
import styles from "./MammalsPage.module.css";

const MammalsPage = () => {
  return (
    <>
      <div className={styles.mammalsPage}>
        <Sidebar />
        <MammalsContent />
      </div>
    </>
  );
};

export default MammalsPage;
