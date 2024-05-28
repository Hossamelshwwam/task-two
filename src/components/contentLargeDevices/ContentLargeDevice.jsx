/* eslint-disable react-refresh/only-export-components */
import React from "react";
import Home from "./Home.jsx";
import Pricing from "./Pricing.jsx";
import Features from "./Features.jsx";

const ContentLargeDevice = () => {
  return (
    <div className="content">
      <Home />
      <Features/>
      <Pricing />
    </div>
  );
};

export default React.memo(ContentLargeDevice);
