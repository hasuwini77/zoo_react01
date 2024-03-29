import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ animalList }) => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {animalList.map((animal, index) => (
          <li key={index}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
