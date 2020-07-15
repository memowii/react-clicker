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
        disabled={this.props.isDisabled}
        onChange={this.props.handleTitleChange}
        onFocus={this.highlightContent}
        onBlur={this.props.handleTitleBlur}
        className={`editable ${this.props.isDisabled ? 'editable--opaque' : ''}`}
        onKeyDown={this.handleEnterKey}
      />
    );
  }
}

export default ClickerTitle;
