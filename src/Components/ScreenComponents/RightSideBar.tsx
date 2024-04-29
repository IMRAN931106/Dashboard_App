import React from "react";
import styles from "./RightSideBar.module.css";
import { RightHeader } from "../GlobalComponents";
import Rupee from "../../Assets/whiteRupee.svg";
import TransactionList from "./TransactionList";

const RightSideBar: React.FC = () => {
  const rupeeNumber = "37,87,987";
  return (
    <div
      style={{
        height: "100vh",
        width: "400px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RightHeader />
      <div className={styles.bigBox}>
        <span className={`${styles.circle} ${styles.leftCircle}`}></span>
        <span className={`${styles.circle} ${styles.rightCircle}`}></span>
        <div className={styles.text}>Your Income</div>
        <div className={styles.rupeeParent}>
          <img
            src={Rupee}
            alt="...."
            style={{ position: "relative", top: "2px", marginRight: "10px" }}
          />
          <div className={styles.rupeeText}>{rupeeNumber}</div>
        </div>
      </div>

      {/* transaction list */}
      <TransactionList />
    </div>
  );
};

export default RightSideBar;
