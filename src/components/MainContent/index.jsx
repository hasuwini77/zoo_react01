import React from "react";
import styles from "./MainContent.module.css";

const MainContent = ({ userHasClicked }) => {
  return (
    <div className={styles.mainContent}>
      {!userHasClicked && <p> Welcome here!</p>}
      {userHasClicked && (
        <p>
          {" "}
          You have clicked my dude
          {console.log("event: ", event)}
        </p>
      )}
    </div>
  );
};

export default MainContent;
