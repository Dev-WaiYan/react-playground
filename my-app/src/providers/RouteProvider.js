import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/commons/Nav";
import PCore from "../pages/PCore";
import PStyle from "../pages/PStyle";
import CssStyleIssue from "../pages/PStyle/CssStyleIssue";
import LessStyleIssue from "../pages/PStyle/LessStyleIssue";
import ScssStyleIssue from "../pages/PStyle/ScssStyleIssue";

function RouteProvider() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<PStyle />} />
        <Route path="core" element={<PCore />} />
        <Route path="style" element={<PStyle />} />
        <Route path="style/less-issue" element={<LessStyleIssue />} />
        <Route path="style/scss-issue" element={<ScssStyleIssue />} />
        <Route path="style/css-issue" element={<CssStyleIssue />} />
      </Routes>
    </Router>
  );
}

export default RouteProvider;
