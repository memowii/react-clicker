import React from "react";

const Navbar = () => (
  <React.Fragment>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="row m-auto">
          <div className="my-3">
            <i className="fas fa-calculator"></i>
            &#xa0; &#xa0;
            <h1 className="d-inline">Counters</h1>
          </div>
        </div>
      </div>
    </nav>
  </React.Fragment>
);

export default Navbar;