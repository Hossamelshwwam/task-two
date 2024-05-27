/* eslint-disable react-refresh/only-export-components */
import React from "react";
import Home from "./Home.jsx";
import Pricing from "./Pricing.jsx";

const ContentLargeDevice = () => {
  console.log("ContentLargeDevice");
  return (
    <div className="content">
      <Home />
      <Pricing />
    </div>
  );
};

export default React.memo(ContentLargeDevice);
