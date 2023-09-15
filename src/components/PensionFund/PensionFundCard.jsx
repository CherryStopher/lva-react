import React from "react";
import styles from "./PensionFunds.module.css";
import ProgressBar from "../common/ProgressBar";

const MAX_VALUE = 2; // Ajusta esto según el valor máximo

function PensionFundCard({ fundName, fund }) {
  return (
    <div key={fundName} className={styles.fund}>
      <h3 className={styles.fundTitle}>{fundName}</h3>
      <div className={styles.fundStats}>
        {Object.keys(fund).map((key) => (
          <div className={styles.fundStat} key={key}>
            <p>{key}:</p>
            <ProgressBar value={fund[key]} maxValue={MAX_VALUE} />
            <div className={styles.fundValue}>{fund[key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PensionFundCard;
