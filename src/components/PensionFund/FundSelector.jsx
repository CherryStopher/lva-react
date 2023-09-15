import React from "react";

function FundSelector({ handleChangeFund, month, funds, selectedFund }) {
  return (
    <div>
      <select onChange={handleChangeFund} value={selectedFund || ""}>
        {month &&
          Object.keys(funds[month]).map((fundName) => (
            <option key={fundName} value={fundName}>
              {fundName}
            </option>
          ))}
      </select>
    </div>
  );
}

export default FundSelector;
