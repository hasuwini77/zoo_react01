import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div className={styles.navbar}>
        <NavLink className={`${styles.link} ${styles.active}`} to="/">
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
