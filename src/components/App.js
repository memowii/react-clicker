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
          contentEditableHtml: "Title"
        }
      ]
    };
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
    const lastId = clickers[clickers.length - 1].id;
    clickers.push({
      id: lastId + 1,
      counter: 0,
      contentEditableHtml: "Title"
    });

    this.setState({
      clickers
    });
  };

  render() {
    return (
      <Layout>
        <Actions onPlus={this.createClicker} />

        <div className="d-flex flex-wrap">
          {this.state.clickers.map((clicker, index) => (
            <Clicker
              key={clicker.id}
              clicker={clicker}
              onPlus={() => this.increaseCounter(index)}
              onMinus={() => this.decreeseCounter(index)}
              onArrow={() => this.redoCounter(index)}
              handleChange={event => this.handleChange(event, index)}
            />
          ))}
        </div>
      </Layout>
    );
  }
}

export default App;
