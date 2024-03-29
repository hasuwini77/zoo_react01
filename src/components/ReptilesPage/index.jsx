import React from "react";
import ReptilesContent from "../ReptilesContent";
import Sidebar from "../Sidebar";
import styles from "./ReptilesPage.module.css";

const ReptilesPage = ({ animalDisplayed }) => {
  return (
    <>
      <div className={styles.reptilesPage}>
        <Sidebar animalList={animalDisplayed} />
        <ReptilesContent />
      </div>
    </>
  );
};

export default ReptilesPage;
