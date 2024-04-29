import React, { useState } from "react";
// import { useAuth } from "../../Context/AuthContext";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// icons import
import DashboardIcon from "../../Assets/dashboard.svg";
import DashboardIconFill from "../../Assets/dashboardcolor.svg";
import SaleIcon from "../../Assets/saleComparition.svg";
import SaleIconFill from "../../Assets/saleComparitioncolor.svg";
import AovIcon from "../../Assets/aov.svg";
import AovIconFill from "../../Assets/aovcolor.svg";
import RegionIcon from "../../Assets/regionWise.svg";
import RegionIconFill from "../../Assets/regionWisecolor.svg";
import TopIcon from "../../Assets/topBrands.svg";
import TopIconFill from "../../Assets/topBrandscolor.svg";
import ReturnIcon from "../../Assets/return.svg";
import ReturnIconFill from "../../Assets/returncolor.svg";
import InventoryIcon from "../../Assets/inventory.svg";
import InventoryIconFill from "../../Assets/inventorycolor.svg";
import Collection from "../../Assets/collection.svg";
import CollectionFill from "../../Assets/collectioncolor.svg";
import DebtorsIcon from "../../Assets/debtors.svg";
import DebtorsIconFill from "../../Assets/debtorscolor.svg";
import CustomerIcon from "../../Assets/customer.svg";
import CustomerIconFill from "../../Assets/customercolor.svg";

const up = <IoIosArrowUp size={24} />;
const down = <IoIosArrowDown size={24} />;

const NavlistName = [
  {
    name: "Dashboard",
    route: "/",
    icon: <img src={DashboardIcon} alt=".." />,
    fillicon: <img src={DashboardIconFill} alt=".." />,
  },
  {
    name: "Sales Comparision",
    route: "/sales-comparision",
    icon: <img src={SaleIcon} alt=".." />,
    fillicon: <img src={SaleIconFill} alt=".." />,
  },
  {
    name: "AOV Analysis",
    route: "/aov-analysis",
    icon: <img src={AovIcon} alt=".." />,
    fillicon: <img src={AovIconFill} alt=".." />,
  },
  {
    name: "Region Wise Sales",
    route: "/region-wise-sales",
    icon: <img src={RegionIcon} alt=".." />,
    fillicon: <img src={RegionIconFill} alt=".." />,
  },
  {
    name: "Top Brands",
    route: "/top-brands",
    icon: <img src={TopIcon} alt=".." />,
    fillicon: <img src={TopIconFill} alt=".." />,
  },
  {
    name: "Return",
    route: "/return",
    icon: <img src={ReturnIcon} alt=".." />,
    fillicon: <img src={ReturnIconFill} alt=".." />,
  },
  {
    name: "Inventory",
    route: "/inventory",
    icon: <img src={InventoryIcon} alt=".." />,
    fillicon: <img src={InventoryIconFill} alt=".." />,
  },
  {
    name: "Collection",
    route: "/collection",
    icon: <img src={Collection} alt=".." />,
    fillicon: <img src={CollectionFill} alt=".." />,
  },
  {
    name: "Debtors",
    route: "/debtors",
    icon: <img src={DebtorsIcon} alt=".." />,
    fillicon: <img src={DebtorsIconFill} alt=".." />,
  },
  {
    name: "Customer Analysis",
    icon: <img src={CustomerIcon} alt=".." />,
    fillicon: <img src={CustomerIconFill} alt=".." />,
    subcategories: [
      {
        name: "Retails",
        route: "/customer-retails",
      },
      {
        name: "Dealership",
        route: "/customer-dealership",
      },
      {
        name: "Stocklist",
        route: "/customer-stocklist",
      },
      {
        name: "B2C",
        route: "/customer-b2c",
      },
    ],
  },
];

const SideBar: React.FC = () => {
  const location = useLocation();
  // const { logout } = useAuth();
  const [navlist, setNavList] = useState(NavlistName);
  const [showDropList, setShowDropList] = useState<boolean>(false);
  const [arrowtype, setArrowtype] = useState<React.ReactNode>(down);

  const toggleSubcategories = () => {
    setShowDropList((prevState) => !prevState);
    setArrowtype((prevState) => (prevState === up ? down : up));
  };

  return (
    <div className={styles.container}>
      <div className={styles.parentLogo}>
        <img
          className={styles.logoImg}
          src={require("../../Assets/Glono.png")}
          alt="glono"
        />
        <div className={styles.glono_text}>Glono Dashboard</div>
      </div>

      <div className={styles.parentList}>
        {/* ul li */}
        <ul className={styles.navbarLinks}>
          {navlist.map((item, index) => (
            <li key={index}>
              {item.name === "Customer Analysis" ? (
                <span
                  className={styles.navLink_1}
                  style={{ marginBottom: "12px" }}
                >
                  <span className={styles.navLink}>
                    <span
                      style={{ marginRight: "15px" }}
                      className={styles.hover}
                    >
                      {item.icon}
                    </span>
                    {item.name}
                  </span>
                  <span
                    onClick={toggleSubcategories}
                    style={{ cursor: "pointer", paddingRight: "14px" }}
                  >
                    {arrowtype}
                  </span>
                </span>
              ) : (
                <NavLink
                  to={item.route ?? ""}
                  className={[
                    location.pathname === item.route && styles.active,
                    styles.navLink,
                  ].join(" ")}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "15px" }}>
                      {location.pathname === item.route
                        ? item.fillicon
                        : item.icon}
                    </span>
                    {item.name}
                  </span>
                  {location.pathname === item.route && (
                    <div className={styles.circle}>
                      <span className={styles.small_circle}></span>
                    </div>
                  )}
                </NavLink>
              )}
              <ul>
                {showDropList &&
                  item.subcategories &&
                  item.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className={styles.margin_top}>
                      <NavLink
                        to={subcategory.route}
                        className={[
                          location.pathname === subcategory.route &&
                            styles.active,
                          styles.navLink,
                        ].join(" ")}
                      >
                        {subcategory.name}
                        {location.pathname === subcategory.route && (
                          <div className={styles.circle}>
                            <span className={styles.small_circle}></span>
                          </div>
                        )}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* end ul li */}

        {/* <div key={"Logout"}>
            <div onClick={logout} className={styles.logoutContainer}>
              <button className={styles.logout}>
                Logout{" "}
                <span>
                  <MdLogout size={23} />
                </span>
              </button>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default SideBar;
