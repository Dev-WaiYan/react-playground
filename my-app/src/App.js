import React, { useState } from "react";
import P_USEMEMO from "./pages/P_UseMemo";

function App() {
  const PAGE = {
    P_USECALLBACK: "useCallback",
    P_USEMEMO: "useMemo",
  };

  const [currentPage, setCurrentPage] = useState();

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-5">
      <h1>React Deep Playground</h1>
      <h3 className="text-info">
        Please see the logs in console, will see the result and changes.
      </h3>

      <div className="my-5">
        <button
          className="me-5"
          onClick={() => {
            alert("I have not implemented yet!");
          }}
        >
          useCallback
        </button>
        <button onClick={() => handlePage(PAGE.P_USEMEMO)}>useMemo</button>
      </div>

      {currentPage === PAGE.P_USEMEMO && <P_USEMEMO />}
      {currentPage === PAGE.P_USECALLBACK && <P_USEMEMO />}
    </div>
  );
}

export default App;
