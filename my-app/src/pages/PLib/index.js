import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/commons/Card";

function PLib() {
  const navigate = useNavigate();
  const contents = [
    {
      id: 1,
      data: (
        <h1>
          Lib <i className="underline font-extrabold">classnames</i>
        </h1>
      ),
      onClick: () => navigate("/lib/classnames"),
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

export default PLib;
