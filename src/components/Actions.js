import React from "react";

const Actions = props => (
  <div className="Actions">
    <h2 className="d-inline mr-2">Actions:</h2>

    <button
      onClick={props.onPlus}
      className="btn btn-primary m-1"
      disabled={props.isDisabled}
    >
      <i className="fas fa-plus"></i>
    </button>

    <button
      onClick={props.onDelete}
      className="btn btn-danger m-1 on-focus-delete"
      disabled={props.isBtnDeleteDisabled}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  </div>
);

export default Actions;
