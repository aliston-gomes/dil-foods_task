import React from "react";
import styles from "./loader.module.css"
const Loader = () => {
  return (
    <div className={styles.loader}>
      <span>Loading Products...</span>
    </div>
  );
};

export default Loader;
