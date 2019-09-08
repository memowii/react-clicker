import React from "react";
import Clicker from "./Clicker";
import Layout from "../pages/Layout";
import Actions from "../components/Actions";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickers: [
        {
          id: 1,
          counter: 0,
          contentEditableHtml: "Title",
          isBtnDeleteShow: false,
          isDisabled: false
        }
      ],
      isBtnPlusDisabled: false
    };

    document.addEventListener("click", event => {
      let clickers = document.getElementsByClassName("Clicker");
      let clickedElement = event.target;
    });
  }

  increaseCounter = index => {
    const clickers = this.state.clickers.slice();

    const clicker = {
      ...clickers[index],
      counter: clickers[index].counter + 1
    };

    clickers[index] = clicker;

    this.setState({
      clickers: clickers
    });
  };

  decreeseCounter = index => {
    const clickers = this.state.clickers.slice();

    const clicker = {
      ...clickers[index],
      counter: clickers[index].counter - 1
    };

    clickers[index] = clicker;

    this.setState({
      clickers: clickers
    });
  };

  redoCounter = index => {
    const clickers = this.state.clickers.slice();

    const clicker = {
      ...clickers[index],
      counter: 0
    };

    clickers[index] = clicker;

    this.setState({
      clickers: clickers
    });
  };

  handleChange = (event, index) => {
    const clickers = this.state.clickers.slice();

    const clicker = {
      ...clickers[index],
      contentEditableHtml: event.target.value
    };

    clickers[index] = clicker;

    this.setState({
      clickers: clickers
    });
  };

  createClicker = () => {
    const clickers = this.state.clickers.slice();
    let lastId;
    
    if (!clickers.length) {
      lastId = 0;
    } else {
      lastId = clickers[clickers.length - 1].id + 1;
    }

    clickers.push({
      id: lastId ,
      counter: 0,
      contentEditableHtml: "Title"
    });

    this.setState({
      clickers
    });
  };

  toggleBtnsDetele = () => {
    const clickers = this.state.clickers.concat();
    const updatedClickers = clickers.map(clicker => {
      clicker.isBtnDeleteShow = !clicker.isBtnDeleteShow;
      clicker.isDisabled = !clicker.isDisabled;
      return clicker;
    });

    this.setState({
      clickers: updatedClickers,
      isBtnPlusDisabled: !this.state.isBtnPlusDisabled
    });
  };

  deleteClicker = index => {
    const clickers = this.state.clickers.slice();
    clickers.splice(index, 1);

    if (!clickers.length) {
      this.setState({
        clickers,
        isBtnPlusDisabled: !this.state.isBtnPlusDisabled
      });
      return;
    }

    this.setState({
      clickers
    });
  };

  render() {
    return (
      <Layout>
        <Actions
          onPlus={this.createClicker}
          onDelete={this.toggleBtnsDetele}
          isDisabled={this.state.isBtnPlusDisabled}
        />

        <div className="d-flex flex-wrap">
          {this.state.clickers.map((clicker, index) => (
            <Clicker
              key={clicker.id}
              clicker={clicker}
              onPlus={() => this.increaseCounter(index)}
              onMinus={() => this.decreeseCounter(index)}
              onArrow={() => this.redoCounter(index)}
              handleChange={event => this.handleChange(event, index)}
              isBtnDeleteShow={clicker.isBtnDeleteShow}
              isDisabled={clicker.isDisabled}
              onDelete={() => this.deleteClicker(index)}
            />
          ))}
        </div>
      </Layout>
    );
  }
}

export default App;
