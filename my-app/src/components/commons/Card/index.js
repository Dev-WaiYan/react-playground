import React from "react";
import { CARD_TYPE } from "../../../constants/card";

function Card({ type = CARD_TYPE.DEFAULT, children }) {
  return (
    <>
      {type === CARD_TYPE.DEFAULT && (
        <div className="p-4 rounded-sm shadow-md bg-slate-400 text-red-50">
          {children}
        </div>
      )}
      {type === CARD_TYPE.ISSUE && (
        <div className="p-4 rounded-sm shadow-md bg-red-400 text-red-50">
          {children}
        </div>
      )}
    </>
  );
}

export default Card;
