import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const links = [
    {
      id: 2,
      text: "Style",
      path: "style",
    },
    {
      id: 1,
      text: "Core",
      path: "core",
    },
    {
      id: 3,
      text: "Advanced",
      path: "advanced",
    },
  ];

  return (
    <div className="bg-slate-300 flex justify-between items-center p-2">
      <Link to="/">
        <h1>Playground</h1>
      </Link>
      <ul className="flex cursor-pointer justify-end">
        {links.map((link) => (
          <li
            key={link.id}
            className="hover:text-sky-50 text-sky-900 ml-5"
            onClick={() => navigate(link.path)}
          >
            {link.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
