import React, { useState } from "react";
import styles from "./MainPage.module.css";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";

const MainPage = ({ animalList, userHasClicked, handleUserClick }) => {
  const [currentAnimal, setCurrentAnimal] = useState(null);

  const updateAnimal = (animalName) => {
    const selectedAnimal = animalList.find((animal) => animal.name === animalName);
    setCurrentAnimal(selectedAnimal);
  };

  return (
    <div className={styles.mainPage}>
      <Sidebar animalList={animalList} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} />
      <MainContent userHasClicked={userHasClicked} currentAnimal={currentAnimal} />
    </div>
  );
};

export default MainPage;
