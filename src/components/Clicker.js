import React from "react";
import ClickerTitle from "./ClickerTitle";
import Button from "./Button";

import "../styles/Clicker.css";

class Clicker extends React.Component {
  render() {
    return (
      <div className="container Clicker">
        <div className="row">
          <div className="title w-100 text-center">
            <ClickerTitle
              html={this.props.clicker.contentEditableHtml}
              handleChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center counter">{this.props.clicker.counter}</div>
        </div>
        <div className="row buttons">
          <div className="col-4">
            <Button btnType={"btn-success"} onClick={this.props.onPlus}>
              <i className="fas fa-plus"></i>
            </Button>
          </div>
          <div className="col-4">
            <Button
              btnType={"btn-warning btn-black"}
              onClick={this.props.onArrow}
            >
              <i className="fas fa-redo"></i>
            </Button>
          </div>
          <div className="col-4">
            <Button btnType={"btn-danger"} onClick={this.props.onMinus}>
              <i className="fas fa-minus"></i>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Clicker;
