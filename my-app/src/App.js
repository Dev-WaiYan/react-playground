import React from "react";
import Footer from "./components/commons/Footer";
import RouteProvider from "./providers/RouteProvider";

function App() {
  return (
    <>
      <RouteProvider />
      <Footer />
    </>
  );
}

export default App;
