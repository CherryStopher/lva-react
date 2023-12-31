import React, { useState, useEffect } from "react";
import styles from "./PensionFunds.module.css";
import PensionFundCard from "../components/PensionFund/PensionFundCard";
import { calculateMaxValue } from "../utils/utils";
import MonthSelector from "../components/PensionFund/MonthSelector";
import FundSelector from "../components/PensionFund/FundSelector";

function PensionFunds({ funds }) {
  const [selectedFund, setSelectedFund] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const MAX_VALUE = calculateMaxValue(funds);

  const handleChangeFund = (event) => {
    setSelectedFund(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  useEffect(() => {
    const months = Object.keys(funds);
    const lastMonth = months[months.length - 1];

    const firstFund = Object.keys(funds[lastMonth])[0];

    setSelectedMonth(lastMonth);
    setSelectedFund(firstFund);
  }, [funds]);

  return (
    <div className={styles.pensionFunds}>
      <h2>Rentabilidad Real de los fondos de pensiones</h2>

      {/* DESKTOP VIEW */}
      <div className={styles.desktopView}>
        <div className={styles.desktopSelect}>
          <MonthSelector
            handleChangeMonth={handleChangeMonth}
            month={selectedMonth}
            funds={funds}
          />
        </div>

        {selectedMonth &&
          Object.keys(funds[selectedMonth]).map((fundName) => (
            <PensionFundCard
              key={fundName}
              fundName={fundName}
              fund={funds[selectedMonth][fundName]}
              maxValue={MAX_VALUE}
            />
          ))}
      </div>

      {/* MOBILE VIEW */}
      <div className={styles.mobileView}>
        <div className={styles.selectorContainer}>
          <MonthSelector
            handleChangeMonth={handleChangeMonth}
            month={selectedMonth}
            funds={funds}
          />
          <FundSelector
            handleChangeFund={handleChangeFund}
            month={selectedMonth}
            funds={funds}
            selectedFund={selectedFund}
          />
        </div>
        {selectedFund && (
          <PensionFundCard
            fundName={selectedFund}
            fund={funds[selectedMonth][selectedFund]}
            maxValue={MAX_VALUE}
          />
        )}
      </div>
    </div>
  );
}

export default PensionFunds;
