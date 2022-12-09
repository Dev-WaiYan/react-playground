import React from "react";

function NeverReRender() {
  console.log("Never rerender");
  return <div>NeverReRender</div>;
}

export default NeverReRender;
