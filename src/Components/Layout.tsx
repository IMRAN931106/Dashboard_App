// layout defined only for screen restricted mobile hide and desktop show
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { GlobalLoader } from "./Loader";
const Layout: React.FC = () => {
  return (
    <>
      <main className={styles.app}>
        <Outlet />
        <GlobalLoader />
      </main>
      <div className={styles.deviceMsg}>
        Please use a desktop to access Glono Dashboard
      </div>
    </>
  );
};

export default Layout;
