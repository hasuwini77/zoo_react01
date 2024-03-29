import React from "react";
import styles from "./MainContent.module.css";

const MainContent = ({ userHasClicked, currentAnimal }) => {
  return (
    <div className={styles.mainContent}>
      {!userHasClicked && <p> Welcome here!</p>}
      {userHasClicked && currentAnimal && (
        <>
          <p>Name: {currentAnimal.name}</p>
          <p>Lifespan: {currentAnimal.lifespan}</p>
        </>
      )}
      {userHasClicked && !currentAnimal && <p>No animal details available.</p>}
    </div>
  );
};

export default MainContent;
