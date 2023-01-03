import React from "react";
import IssueComponent from "./IssueComponent";
import ResolvedComponent from "./ResolvedComponent";
import "./style.less";

function LessStyleIssue() {
  return (
    <div>
      <div className="m-3 text-3xl">
        <h1>Less</h1>
      </div>
      <div className="less-container m-3 p-3 rounded-lg">
        <p>
          Background Color should be <strong>RED</strong>.
        </p>
      </div>
      <div className="border-2 m-3">
        <h1 className="m-3 text-xl">Issued Component</h1>
        <IssueComponent />
      </div>
      <div className="border-2 m-3">
        <h1 className="m-3 text-xl">
          Resolved Component Using <strong>LESS MODULE</strong>
        </h1>
        <ResolvedComponent />
      </div>
    </div>
  );
}

export default LessStyleIssue;
