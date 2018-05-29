import React from "react";

import logo from "../../img/paradigm.jpg";

import "./header.css";

var Header = props => (
  <div className="header-component">
    <img src={logo} alt="paradigm logo" />
  </div>
);

export default Header;
