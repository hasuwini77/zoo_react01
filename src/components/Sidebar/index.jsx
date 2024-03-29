import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ animalList, handleUserClick }) => {
  const handleClick = () => {
    handleUserClick();
  };

  return (
    <div className={styles.sidebar}>
      <ul>
        {Array.isArray(animalList) ? (
          animalList.map((animal, index) => (
            <li key={index} onClick={handleClick}>
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
