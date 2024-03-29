import React from "react";
import styles from "./MainPage.module.css";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";

const MainPage = ({ animalList }) => {
  return (
    <div className={styles.mainPage}>
      <Sidebar animalList={animalList} />
      <MainContent />
    </div>
  );
};

export default MainPage;
