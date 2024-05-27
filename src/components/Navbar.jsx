/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const Navbar = ({ width }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width > 992) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [width]);

  return (
    <div className="navbar">
      <div className="container flex-between">
        <div className="logo flex-between">
          <div className="menu" onClick={() => setOpen(!open)}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <i className="fa-solid fa-border-all"></i>
          <h1>Grid</h1>
        </div>

        <div className="links">
          <ul className={`flex-between ${!open && "hidden"}`}>
            <li className="active">How it works</li>
            <li className="circal"></li>
            <li>Who are you</li>
            <li className="circal"></li>
            <li>What we do</li>
            <li className="circal"></li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="signIn">
          <button className="default-button">sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
