import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../components/commons/Nav";
import PAdvanced from "../pages/PAdvanced";
import PCore from "../pages/PCore";
import PLib from "../pages/PLib";
import PLibClassnames from "../pages/PLib/PLibClassnames";
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
        <Route path="advanced" element={<PAdvanced />} />
        <Route path="style" element={<PStyle />} />
        <Route path="style/less-issue" element={<LessStyleIssue />} />
        <Route path="style/scss-issue" element={<ScssStyleIssue />} />
        <Route path="style/css-issue" element={<CssStyleIssue />} />
        <Route path="lib" element={<PLib />} />
        <Route path="lib/classnames" element={<PLibClassnames />} />
      </Routes>
    </Router>
  );
}

export default RouteProvider;
