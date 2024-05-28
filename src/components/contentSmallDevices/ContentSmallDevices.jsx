/* eslint-disable react-refresh/only-export-components */
import React from "react";
import Home from "./Home";
// import Pricing from "./Pricing";
import Features from "../contentLargeDevices/Features";
import Pricing from "../contentLargeDevices/Pricing";

const ContentSmallDevices = () => {
  console.log("ContentSmallDevices");
  return (
    <div className="content-mobile">
      <Home />
      <Features />
      <Pricing />
    </div>
  );
};

export default React.memo(ContentSmallDevices);
