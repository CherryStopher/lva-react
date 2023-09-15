// Calculates the maximum absolute value of all the funds
export function calculateMaxValue(funds) {
  return Object.values(funds).reduce((maxValue, monthFunds) => {
    const monthMax = Object.values(monthFunds).reduce(
      (fundMax, fund) =>
        Math.max(
          fundMax,
          ...Object.values(fund).map((value) => Math.abs(value))
        ),
      0
    );
    return Math.max(maxValue, monthMax);
  }, 0);
}
