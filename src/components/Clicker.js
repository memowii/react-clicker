import React from "react";
import "../styles/Clicker.css";

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
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
      })
  }

  render() {
    return (
      <div className="Clicker container">
        <div className="row">
          <div className="col text-center counter">{this.state.counter}</div>
        </div>
        <div className="row buttons">
          <div className="col-4">
            <button
              onClick={this.increaseCounter}
              type="button"
              class="btn btn-success"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-4">
            <button
                onClick={this.redoCounter}
              type="button"
              style={{ color: "black" }}
              class="btn btn-warning"
            >
              <i class="fas fa-redo"></i>
            </button>
          </div>
          <div className="col-4">
            <button
              onClick={this.decreeseCounter}
              type="button"
              class="btn btn-danger"
            >
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Clicker;
