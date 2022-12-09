import React, { useMemo, useState } from "react";
import NeverReRender from "./NeverReRender";
import WillReRenderEverytime from "./WillReRenderEverytime";
import WillReRenderIfNeed from "./WillReRenderIfNeed";

function P_USEMEMO() {
  const [ableToChange, setAbleToChange] = useState(Date.now());
  const [counter, setCounter] = useState(0);

  const [neverReRender] = useState(<NeverReRender />);
  const willReRenderIfNeed = useMemo(
    () => <WillReRenderIfNeed />,
    [ableToChange]
  );

  const increase = () => {
    setCounter(counter + 1);
  };

  const doChange = () => {
    setAbleToChange(Date.now());
  };

  return (
    <div className="p-5 bg-light">
      <h1>Count : {counter}</h1>
      <button onClick={increase}>ClickCounter</button>

      {/* Render every time */}
      {<WillReRenderEverytime />}

      {/* Never Rerender */}
      {neverReRender}

      {/* Render if need */}
      <div className="my-5">
        <button onClick={doChange}>Change for useMemo</button>
        {willReRenderIfNeed}
      </div>
    </div>
  );
}

export default P_USEMEMO;
