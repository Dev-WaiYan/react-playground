import React from "react";
import "./PLibClassnames.less";
import classNames from "classnames";

function PLibClassnames({ className }) {
  const cls = classNames({
    container: true,
    secondContainer: true,
    secondContainerContent: false, // This will not work because it is not using from `cls`. It is directly using static className.
    [className]: className,
  });

  return (
    <div className={`${cls} m-4`}>
      <h1>Main Container</h1>
      <div className={cls}>
        <h2>Second Container</h2>
        <div className="secondContainerContent">
          <p>This is secondContainerContent.</p>
        </div>
      </div>
    </div>
  );
}

export default PLibClassnames;
