import React from "react";
import "./style.less";

function IssueComponent() {
  return (
    <div className="less-container m-3 p-3 rounded-lg">
      <p>
        Background Color should be <strong>GREEN</strong>.
      </p>
      <p>
        Text should be <strong>BIGGER</strong>.
      </p>
      <p>
        Text color should be <strong>WHITE</strong>.
      </p>
    </div>
  );
}

export default IssueComponent;
