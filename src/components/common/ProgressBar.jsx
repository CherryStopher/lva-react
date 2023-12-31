import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ value, maxValue }) {
  const percentage = (Math.abs(value) / maxValue) * 100;

  const barStyle = {
    width: `${percentage / 2}%`,
    backgroundColor: value > 0 ? "#A698FC" : "#d1727d",
    marginLeft: value > 0 ? `50px` : `calc(50px - ${percentage / 2}%)`,
  };

  return (
    <div>
      <div className={styles.progressContainer}>
        <div className={styles.progressBarFill} style={barStyle}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
