import React from "react";
import styles from "./style.module.less";

function ResolvedComponent() {
  return (
    <div className={`${styles["less-container"]} m-3 p-3 rounded-lg`}>
      <p>
        Background Color should be <strong>BLUE VIOLET</strong>.
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
