import React from "react";
import styles from "./PensionFunds.module.css";
import ProgressBar from "../common/ProgressBar";

function PensionFundCard({ fundName, fund, maxValue }) {
  return (
    <div key={fundName} className={styles.fund}>
      <h3 className={styles.fundTitle}>{fundName}</h3>

      {Object.keys(fund).map((key) => (
        <div className={styles.fundStat} key={key}>
          <p>{key}:</p>
          <ProgressBar value={fund[key]} maxValue={maxValue} />
          <div className={styles.fundValue}>{fund[key]}</div>
        </div>
      ))}
    </div>
  );
}

export default PensionFundCard;
