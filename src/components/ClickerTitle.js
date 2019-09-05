import React from "react";

import ContentEditable from "react-contenteditable";

class ClickerTitle extends React.Component {
  highlightContent = () => {
    setTimeout(() => {
      document.execCommand("selectAll", false, null);
    }, 0);
  };

  handleEnterKey = event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.activeElement.blur();
    }
  };

  render() {
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={this.props.html}
        disabled={false}
        onChange={this.props.onChange}
        onFocus={this.highlightContent}
        className="editable"
        onKeyDown={this.handleEnterKey}
      />
    );
  }
}

export default ClickerTitle;
