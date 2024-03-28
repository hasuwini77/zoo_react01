import React from "react";
import styles from "./MainPage.module.css";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default MainPage;
