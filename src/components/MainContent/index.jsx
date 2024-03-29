import React from "react";
import styles from "./MainContent.module.css";

const MainContent = ({ userHasClicked, handleUserClick }) => {
  return (
    <div className={styles.mainContent}>
      {!userHasClicked && <p> Welcome here!</p>}
      {userHasClicked && <p> You have clicked my dude</p>}
    </div>
  );
};

export default MainContent;
