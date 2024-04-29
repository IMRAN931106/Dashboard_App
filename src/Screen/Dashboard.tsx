import React, { useState } from "react";
import { HorizontalScroll, RightSideBar, Table } from "../Components/ScreenComponents";
import styles from "./ScreensStyle/Dashboard.module.css";
import {
  ScrollBar,
  SearchBox,
  SearchResult,
} from "../Components/GlobalComponents";

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const width = window.innerWidth - parseInt("400px");

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <section className={styles.container}>
        <div className={styles.parent_container}>
          <h3 className={styles.heading}>Overview</h3>
          <div>
            <SearchBox
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              placeholder={"Search"}
              borderRadius={"21px"}
              backgroundColor={"#ffffff"}
              paddingProps={"21px"}
              widthProps={"400px"}
              heightProps={"40px"}
              setIsFocused={setIsFocused}
            />
            <SearchResult searchTerm={searchTerm} isFocused={isFocused} />
          </div>
        </div>
        <div style={{ width: "1220px", position: "relative" }}>
          <ScrollBar />
        </div>
        <div style={{margin: "26px 0px",display: "flex",justifyContent: "center",width: "100%"}}>
          <div style={{width: "90%",height: "250px",background: "#ffffff",borderRadius: "10px"}}>
          hello
          </div>
        </div>
        <div>
          <HorizontalScroll />
          <Table />
        </div>
      </section>
      <div style={{ position: "sticky", top: "0" }}>
        <RightSideBar />
      </div>
    </main>
  );
};

export default Dashboard;
