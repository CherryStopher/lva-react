import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ value, maxValue }) {
  // Calcula el porcentaje de progreso
  const percentage = (Math.abs(value) / maxValue) * 100;

  // Establece el ancho de la barra de progreso
  const barStyle = {
    width: `${percentage}%`,
  };

  // Establece el color de la barra de progreso
  let barColor = "#A698FC"; // Color por defecto

  if (value > 0) {
    barColor = "#00FF00"; // Cambia a verde si el valor es positivo
  } else if (value < 0) {
    barColor = "#FF0000"; // Cambia a rojo si el valor es negativo
  }

  barStyle.backgroundColor = barColor;

  // Calcula la posición del indicador del centro
  const centerIndicatorPosition = 50 - percentage / 2;

  // Establece la posición del indicador de centro
  const centerIndicatorStyle = {
    left: `${centerIndicatorPosition}%`,
  };

  return (
    <div>
      <div className={styles.progressContainer}>
        <div
          className={styles.centerIndicator}
          style={centerIndicatorStyle}
        ></div>
        <div className={styles.progressBarFill} style={barStyle}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
