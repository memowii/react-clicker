import React from "react";

import ClickerTitle from "./ClickerTitle";
import Button from "./Button";
import "./styles/Clicker.css";

class Clicker extends React.Component {
  render() {
    return (
      <div className="Clicker col-12 col-sm-6 col-md-4 mb-4">
        <div className="container" >
          <div className="row">
            <div className="w-100 text-center position-relative">
              <ClickerTitle
                html={this.props.clicker.contentEditableHtml}
                handleTitleChange={this.props.handleTitleChange}
                handleTitleBlur={this.props.handleTitleBlur}
                isDisabled={this.props.isDisabled}
              />

              {this.props.isBtnDeleteShow && (
                <button
                  className="btn btn-danger btn--delete on-focus-delete"
                  onClick={this.props.onDelete}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col text-center counter">
              {this.props.clicker.counter}
            </div>
          </div>

          <div className="row">
            <div className="btn-group w-100" role="group">
              <Button
                btnType={"btn-danger"}
                onClick={this.props.onMinus}
                isDisabled={this.props.isDisabled}
              >
                <i className="fas fa-minus"></i>
              </Button>

              <Button
                btnType={"btn-warning btn-black"}
                onClick={this.props.onArrow}
                isDisabled={this.props.isDisabled}
              >
                <i className="fas fa-redo"></i>
              </Button>

              <Button
                btnType={"btn-success"}
                onClick={this.props.onPlus}
                isDisabled={this.props.isDisabled}
              >
                <i className="fas fa-plus"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clicker;
