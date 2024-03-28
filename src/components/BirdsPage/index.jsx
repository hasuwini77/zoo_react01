import React from "react";
import BirdsContent from "../BirdsContent";
import Sidebar from "../Sidebar";
import styles from "./BirdsPage.module.css";

const BirdsPage = () => {
  return (
    <>
      <div className={styles.birdsPage}>
        <Sidebar />
        <BirdsContent />
      </div>
    </>
  );
};

export default BirdsPage;
