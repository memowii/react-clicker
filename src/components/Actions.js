import React, { Component } from "react";

const Actions = props => (
  <div className="Actions">
    <h2 className="d-inline mr-2">Actions:</h2>

    <button onClick={props.onPlus} className="btn btn-primary m-1">
      <i className="fas fa-plus"></i>
    </button>

    <button className="btn btn-danger m-1">
      <i className="fas fa-times"></i>
    </button>
  </div>
);

export default Actions;
