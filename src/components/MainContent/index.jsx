import React, { useState } from "react";
import styles from "./MainContent.module.css";
import { getImageURL } from "../../utils/functions";
import AnimalModal from "../AnimalModal";

const MainContent = ({ userHasClicked, currentAnimal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = () => {
    console.log("Image not found!");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const animalGroupClick = () => {
    const groupUrl = `/${currentAnimal.group}`;
    window.location.href = groupUrl;
  };

  return (
    <div className={styles.mainContent}>
      {!userHasClicked && <h1>Welcome On Board homie!</h1>}
      {userHasClicked && currentAnimal && (
        <>
          <div className={styles.activeAnimal}>
            <img className={styles.contentImg} src={getImageURL(currentAnimal.smallimg)} alt={currentAnimal.img} onError={handleImageError} />
            <h1 className={styles.title}>{currentAnimal.name}</h1>
            <p className={styles.description}>{currentAnimal.description}</p>
            <p className={styles.food}>Usually eats: {currentAnimal.food}</p>
            <div className={styles.buttonContainer}>
              <button onClick={animalGroupClick}> {currentAnimal.group} </button>
              <button className={styles.linkButton} onClick={openModal}>
                Read More
              </button>
            </div>
          </div>
          {isModalOpen && <AnimalModal currentAnimal={currentAnimal} onClose={closeModal} />}
        </>
      )}
      {userHasClicked && !currentAnimal && <p>No animal details available.</p>}
    </div>
  );
};

export default MainContent;
