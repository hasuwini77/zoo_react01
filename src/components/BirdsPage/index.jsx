import React from "react";
import BirdsContent from "../BirdsContent";
import Sidebar from "../Sidebar";
import styles from "./BirdsPage.module.css";

const BirdsPage = ({ animalDisplayed }) => {
  return (
    <>
      <div className={styles.birdsPage}>
        <Sidebar animalList={animalDisplayed} />
        <BirdsContent />
      </div>
    </>
  );
};

export default BirdsPage;
