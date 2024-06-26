import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ContentLargeDevice from "./components/contentLargeDevices/ContentLargeDevice";
import ContentSmallDevices from "./components/contentSmallDevices/ContentSmallDevices";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Navbar width={width} />
      {width > 556 ? <ContentLargeDevice /> : <ContentSmallDevices />}
      <ScrollToTop />
    </>
  );
}

export default App;
