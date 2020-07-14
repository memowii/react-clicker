import React from "react";

import Navbar from "./Navbar";
import "./styles/Layout.css";

const Layout = props => (
  <>
    <Navbar/>

    <main>
      <article>
        <div className="container mt-4">
          {props.children}
        </div>
      </article>
    </main>
  </>
);

export default Layout;
