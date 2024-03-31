import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = ({ setUserHasClicked }) => {
  const handleCategoryClick = () => {
    // Reset the current animal detail state
    setUserHasClicked(null);
  };

  return (
    <>
      <div className={styles.navbar}>
        <NavLink className={`${styles.link} ${styles.active}`} to="/" onClick={handleCategoryClick}>
          Home
        </NavLink>
        <NavLink className={`${styles.link} ${styles.active}`} to="/mammals" onClick={handleCategoryClick}>
          Mammals
        </NavLink>
        <NavLink className={`${styles.link} ${styles.active}`} to="/birds" onClick={handleCategoryClick}>
          Birds
        </NavLink>
        <NavLink className={`${styles.link} ${styles.active}`} to="/reptiles" onClick={handleCategoryClick}>
          Reptiles
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
