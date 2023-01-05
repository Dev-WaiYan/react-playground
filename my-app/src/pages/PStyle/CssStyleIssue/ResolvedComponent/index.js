import React from "react";
import styles from "./style.module.css";

function ResolvedComponent({ className }) {
  return (
    <div
      className={`${styles["css-container"]} m-3 p-3 rounded-lg ${className}`}
    >
      <p>
        Background Color should be <strong>ORANGE RED</strong>.
      </p>
      <p>
        Text should be <strong>BIGGER</strong>.
      </p>
      <p>
        Text color should be <strong>BLACK</strong>.
      </p>
    </div>
  );
}

export default ResolvedComponent;
