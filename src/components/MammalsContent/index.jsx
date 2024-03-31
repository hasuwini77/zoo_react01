import React from "react";
import styles from "./MammalsContent.module.css";
import { getImageURL } from "../../utils/functions";
import { useState } from "react";
import AnimalModal from "../AnimalModal";

const MammalsContent = ({ userHasClicked, currentAnimal }) => {
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
    <div className={styles.mammalsContent}>
      {!userHasClicked && <h1> Welcome On Mammals Page!</h1>}
      {userHasClicked && currentAnimal && (
        <>
          <div className={styles.activeAnimal}>
            <img className={styles.contentImg} src={getImageURL(currentAnimal.smallimg)} alt={currentAnimal.img} onError={handleImageError} />
            <h1 className={styles.title}> {currentAnimal.name}</h1>
            <p className={styles.description}> {currentAnimal.description}</p>
            <p className={styles.food}>Usually eats: {currentAnimal.food} </p>
            <p className={styles.weight}>Weight: {currentAnimal.weight} </p>
            <p className={styles.length}>Length: {currentAnimal.length} </p>
            <p className={styles.lifespan}>Typically lives: {currentAnimal.lifespan} </p>
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

export default MammalsContent;
