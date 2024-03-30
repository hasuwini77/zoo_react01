import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = ({ setUserHasClicked }) => {
  const location = useLocation();
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      setUserHasClicked(null);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <NavLink className={`${styles.link} ${styles.active}`} to="/" onClick={handleHomeClick}>
          Home
        </NavLink>
        <NavLink className={`${styles.link} ${styles.active}`} to="/mammals">
          Mammals
        </NavLink>
        <NavLink className={`${styles.link} ${styles.active}`} to="/birds">
          Birds
        </NavLink>
        <NavLink className={`${styles.link} ${styles.active}`} to="/reptiles">
          Reptiles
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
