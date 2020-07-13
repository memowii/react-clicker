import React from "react";

import Navbar from "./Navbar";
import "./styles/Layout.css";

const Layout = props => (
  <React.Fragment>
    <Navbar />

    <div className="container mt-4">
      {props.children}
    </div>
  </React.Fragment>
);

export default Layout;
