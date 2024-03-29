import React from "react";
import styles from "./MainPage.module.css";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";

const MainPage = ({ animalList, userHasClicked, handleUserClick }) => {
  return (
    <div className={styles.mainPage}>
      <Sidebar animalList={animalList} userHasClicked={userHasClicked} handleUserClick={handleUserClick} />
      <MainContent userHasClicked={userHasClicked} />
    </div>
  );
};

export default MainPage;
