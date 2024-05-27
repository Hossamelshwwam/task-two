import Features from "./Features";
import Home from "./Home";
import Pricing from "./Pricing";

const ContentSmallDevices = () => {
  return (
    <div className="content-mobile">
      <Home />
      <Features />
      <Pricing />
    </div>
  );
};

export default ContentSmallDevices;
