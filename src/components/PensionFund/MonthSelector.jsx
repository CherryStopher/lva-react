import React from "react";

function MonthSelector({ handleChangeMonth, month, funds }) {
  return (
    <div>
      <select onChange={handleChangeMonth} value={month || ""}>
        {Object.keys(funds).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MonthSelector;
