import React from "react";
import "../styles/Clicker.css";
import Button from "./Button";
import ClickerTitle from "./ClickerTitle";

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      contentEditableHtml: "Title"
    };
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decreeseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  redoCounter = () => {
    this.setState({
      counter: 0
    });
  };

  handleChange = event => {
    this.setState({ contentEditableHtml: event.target.value });
  };

  render() {
    return (
      <div className="container Clicker">
        <div className="row">
          <div className="title w-100 text-center">
            <ClickerTitle
              html={this.state.contentEditableHtml}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center counter">{this.state.counter}</div>
        </div>
        <div className="row buttons">
          <div className="col-4">
            <Button btnType={"btn-success"} onClick={this.increaseCounter}>
              <i className="fas fa-plus"></i>
            </Button>
          </div>
          <div className="col-4">
            <Button
              btnType={"btn-warning btn-black"}
              onClick={this.redoCounter}
            >
              <i className="fas fa-redo"></i>
            </Button>
          </div>
          <div className="col-4">
            <Button btnType={"btn-danger"} onClick={this.decreeseCounter}>
              <i className="fas fa-minus"></i>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Clicker;
