import React, { useState, useEffect } from "react";
import styles from "./PensionFunds.module.css";
import PensionFundCard from "../components/PensionFund/PensionFundCard";
import { calculateMaxValue } from "../utils/utils";

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
    const firstMonth = Object.keys(funds)[0];
    const firstFund = Object.keys(funds[firstMonth])[0];

    setSelectedMonth(firstMonth);
    setSelectedFund(firstFund);
  }, [funds]);

  return (
    <div className={styles.pensionFunds}>
      <h2>Rentabilidad Real de los fondos de pensiones</h2>

      {/* DESKTOP VIEW */}
      <div className={styles.desktopView}>
        <div className={styles.desktopSelect}>
          <select onChange={handleChangeMonth} value={selectedMonth || ""}>
            {Object.keys(funds).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
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
          <select onChange={handleChangeMonth} value={selectedMonth || ""}>
            {Object.keys(funds).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select onChange={handleChangeFund} value={selectedFund || ""}>
            {selectedMonth &&
              Object.keys(funds[selectedMonth]).map((fundName) => (
                <option key={fundName} value={fundName}>
                  {fundName}
                </option>
              ))}
          </select>
        </div>
        {selectedFund && (
          <PensionFundCard
            fundName={selectedFund}
            fund={funds[selectedMonth][selectedFund]}
          />
        )}
      </div>
    </div>
  );
}

export default PensionFunds;
