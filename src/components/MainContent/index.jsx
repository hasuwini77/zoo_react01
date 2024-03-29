import React from "react";
import styles from "./MainContent.module.css";
import { getImageURL } from "../../utils/functions";

const MainContent = ({ userHasClicked, currentAnimal }) => {
  return (
    <div className={styles.mainContent}>
      {!userHasClicked && <p> Welcome On Board homie!</p>}
      {userHasClicked && currentAnimal && (
        <>
          <div className={styles.activeAnimal}>
            <img src={getImageURL(currentAnimal.img)} alt={currentAnimal.img} />
            <h1 className={styles.title}> {currentAnimal.name}</h1>
            <p className={styles.description}> {currentAnimal.description}</p>
            <p className={styles.food}> {currentAnimal.food} </p>
            <p>Lifespan: {currentAnimal.lifespan}</p>
          </div>
        </>
      )}
      {userHasClicked && !currentAnimal && <p>No animal details available.</p>}
    </div>
  );
};

export default MainContent;
