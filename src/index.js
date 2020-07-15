import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import App from "./components/App";
import "./global.css";

ReactDOM.render(<App/>, document.getElementById("root"));

// TODO: Refactor code of App.js (try to use hooks, create more components).
// TODO: Try to apply a undo functionality when deleting counters (redux?).
// TODO: Drag and drop clickers.
// TODO: Remove unused css styles (bootstrap and fontawesome?).