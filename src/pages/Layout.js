import React from "react";
import "./styles/Layout.css";

const Layout = props => (
  <React.Fragment>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="row m-auto">
          <i className="fas fa-calculator"></i>
          &#xa0; &#xa0;
          <h1 className="d-inline">Counters</h1>
        </div>
      </div>
    </nav>

    <div className="container mt-4">

      <div className="Actions">
        <h2 className="d-inline mr-2">Actions:</h2>
        <button className="btn btn-primary m-1">
          <i className="fas fa-plus"></i>
        </button>
        <button className="btn btn-danger m-1">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="d-flex flex-wrap">{props.children}</div>
    </div>
  </React.Fragment>
);

export default Layout;
