import React from "react";

import Clicker from "./Clicker";
import Layout from "./Layout";
import Actions from "../components/Actions";
import "./styles/App.css";

const GENERAL_CLICKER_TITLE = "Set A Title";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickers: [
        {
          id: 1,
          counter: 0,
          contentEditableHtml: GENERAL_CLICKER_TITLE,
          isBtnDeleteShow: false,
          isDisabled: false
        }
      ],
      isBtnPlusDisabled: false,
      isBtnDeleteDisabled: false,
      isDeletingModeOn: false,
    };
  }

  hasParent = (element, className) => {
    while (element !== document) {
      if (element.className.includes(className)) return true;
      element = element.parentNode;
    }
    return false;
  };

  componentDidMount = () => {
    document.addEventListener("click", event => {
      let clickedElement = event.target;

      if (this.hasParent(clickedElement, "on-focus-delete")) {
        return;
      }

      if (this.state.isBtnPlusDisabled && this.state.clickers[0].isDisabled) {
        this.toggleBtnsDetele();
      }
    });
  };

  increaseCounter = index => {
    if (this.state.isDeletingModeOn) {
      return;
    }

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
    if (this.state.isDeletingModeOn) {
      return;
    }

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
    if (this.state.isDeletingModeOn) {
      return;
    }

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

  handleTitleChange = (event, index) => {
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

  handleTitleBlur = (event, index) => {
    const clickers = this.state.clickers.slice();

    const clicker = clickers[index];
    clicker.contentEditableHtml = clicker.contentEditableHtml.replace(/&nbsp;/g, '');

    clickers[index] = clicker;

    this.setState({
      clickers: clickers
    });
  }

  createClicker = () => {
    if (this.state.isDeletingModeOn) {
      return;
    }

    const clickers = this.state.clickers.slice();
    let lastId;

    if (!clickers.length) {
      lastId = 0;
      this.setState({
        isBtnDeleteDisabled: !this.state.isBtnDeleteDisabled
      });
    } else {
      lastId = clickers[clickers.length - 1].id + 1;
    }

    clickers.push({
      id: lastId,
      counter: 0,
      contentEditableHtml: GENERAL_CLICKER_TITLE
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
      isBtnPlusDisabled: !this.state.isBtnPlusDisabled,
      isDeletingModeOn: !this.state.isDeletingModeOn
    });
  };

  deleteClicker = index => {
    const clickers = this.state.clickers.slice();
    clickers.splice(index, 1);

    if (!clickers.length) {
      this.setState({
        clickers,
        isBtnPlusDisabled: !this.state.isBtnPlusDisabled,
        isBtnDeleteDisabled: !this.state.isBtnDeleteDisabled,
        isDeletingModeOn: !this.state.isDeletingModeOn
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
          isBtnDeleteDisabled={this.state.isBtnDeleteDisabled}
        />

        <div className="d-flex flex-wrap">
          {this.state.clickers.map((clicker, index) => (
            <Clicker
              key={clicker.id}
              clicker={clicker}
              onPlus={() => this.increaseCounter(index)}
              onMinus={() => this.decreeseCounter(index)}
              onArrow={() => this.redoCounter(index)}
              handleTitleChange={event => this.handleTitleChange(event, index)}
              handleTitleBlur={event => this.handleTitleBlur(event, index)}
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
