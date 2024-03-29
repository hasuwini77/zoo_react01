import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ animalList, userHasClicked, handleUserClick }) => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {Array.isArray(animalList) ? (
          animalList.map((animal, index) => (
            <li key={index} onClick={handleUserClick}>
              {animal.name}
            </li>
          ))
        ) : (
          <li>No animals to display</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
