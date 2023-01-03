import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/commons/Card";
import { CARD_TYPE } from "../../constants/card";

function PStyle() {
  const navigate = useNavigate();
  const contents = [
    {
      id: 1,
      data: <h1>Less Style Problem</h1>,
      type: CARD_TYPE.ISSUE,
      onClick: () => navigate("/style/less-issue"),
    },
    {
      id: 2,
      data: <h1>Scss Style Problem</h1>,
      type: CARD_TYPE.ISSUE,
      onClick: () => navigate("/style/scss-issue"),
    },
    {
      id: 3,
      data: <h1>CSS Module can save!</h1>,
      onClick: () => navigate("/style/css-issue"),
    },
  ];

  return (
    <div className="flex md:flex-row flex-col p-1">
      {contents.map((content) => (
        <div
          key={content.id}
          className="cursor-pointer w-full md:w-1/3 m-2"
          onClick={content.onClick}
        >
          <Card type={content.type}>
            <div className="flex justify-center">{content.data}</div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default PStyle;
