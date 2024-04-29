import React from "react";
import rupeeIconBlack from "../../Assets/transactionRupee.svg";
import arrowIcon from "../../Assets/transactionArrow.svg";
import styles from "./TransactionList.module.css";

const transactionList = [
  {
    name: "Karan Sharma",
    subline: "Car Impression, Gurugram",
    icon: <img src={arrowIcon} alt="..." />,
    price: "59,999",
    date: "21 Apr 2024",
    rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
  },
   {
     name: "Karan Sharma",
     subline: "Car Impression, Gurugram",
     icon: <img src={arrowIcon} alt="..." />,
     price: "59,999",
     date: "21 Apr 2024",
     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
   },
   {
     name: "Karan Sharma",
     subline: "Car Impression, Gurugram",
     icon: <img src={arrowIcon} alt="..." />,
     price: "59,999",
     date: "21 Apr 2024",
     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
   },
   {
     name: "Karan Sharma",
     subline: "Car Impression, Gurugram",
     icon: <img src={arrowIcon} alt="..." />,
     price: "59,999",
     date: "21 Apr 2024",
     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
   },
   {
     name: "Karan Sharma",
     subline: "Car Impression, Gurugram",
     icon: <img src={arrowIcon} alt="..." />,
     price: "59,999",
     date: "21 Apr 2024",
     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
   },
   {
     name: "Karan Sharma",
     subline: "Car Impression, Gurugram",
     icon: <img src={arrowIcon} alt="..." />,
     price: "59,999",
     date: "21 Apr 2024",
     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   },
//   {
//     name: "Karan Sharma",
//     subline: "Car Impression, Gurugram",
//     icon: <img src={arrowIcon} alt="..." />,
//     price: "59,999",
//     date: "21 Apr 2024",
//     rupeeIcon: <img src={rupeeIconBlack} alt="..." />,
//   }
];

const TransactionList: React.FC = () => {
  return (
    <>
      {/* Last Transaction */}
      <div className={styles.container}>
        {/* header */}
        <div className={styles.parentHeader}>
          <div className={styles.headerText}>Last Transaction</div>
          <div className={styles.see_all_button}>See All</div>
        </div>

        {/* transaction list */}
<div style={{marginTop: "51px"}}>
        {transactionList.map((item, index) => (
          <div key={index} className={styles.mainList}>
            {/* name and icon */}
            <div style={{display: "flex", alignItems: "center"}}>
            <div className={styles.listIcon}>{item.icon}</div>
            <div className={styles.nameNsubline}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.subline}>{item.subline}</div>
            </div>
            </div>
            {/* price */}
            <div className={styles.priceParent}>
              <div className={styles.rupeeIconParent}>
                <div className={styles.rupeeIcon}>{item.rupeeIcon}</div>
                <div className={styles.price}>{item.price}</div>
              </div>
              <span className={styles.date}>{item.date}</span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default TransactionList;
