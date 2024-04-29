import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./HomeLayout.module.css";
import { SideBar } from "./ScreenComponents";
import { Suspense } from "react";
import { Loader } from "./Loader";
import { RightHeader } from "./GlobalComponents";


const width = "300px";
// const bigWidth = window.innerWidth 
const bigWidth = "100%" 
const HomeLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div style={{ minWidth: width }}>
        <SideBar />
      </div>

      <div style={{
         width: bigWidth, 
           backgroundColor: "#F4E6D5"
           }}>
        {/* <Headers title="CMS" /> */}
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "95%",
              }}
            >
              <Loader />
            </div>
          }
        >
          {/* onScroll={handleScroll} */}
          <div style={{ height: "100vh"}}> 
          
            <Outlet />
            {/* <RightHeader /> */}
          </div>
          
        </Suspense>
      </div>
    </div>
  );
};

export default HomeLayout;
