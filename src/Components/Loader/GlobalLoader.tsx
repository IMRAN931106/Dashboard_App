import { useGlobal } from "../../Context/AppContext";
import React, { useEffect, useState } from "react";
import { useIsFetching } from "react-query";
import styles from './GlobalLoader.module.css'

const GlobalLoader: React.FC = () => {
  const { loading } = useGlobal();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || showLoader) return null;

  // if (loading) return null;

  return (
    <div className={styles.loaderContainer}>
      <img src={require("../../Assets/Glono.png")} alt="Loader..." className={styles.loaderImage} />
    </div>
  );
};

export default GlobalLoader;
