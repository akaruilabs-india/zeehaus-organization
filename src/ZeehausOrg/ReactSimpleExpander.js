import React, { Component } from "react";

export default class ReactSimpleExpander extends Component {
  state = {
    open: this.props.expanded || false,
  };
  render() {
    const header = this.props.header || "No header supplied";
    return (
      <div
        className={
          this.state.open
            ? "react-simple-expander react-simple-expander-expanded"
            : "react-simple-expander"
        }
      >
        <div
          onClick={() => this.setState({ open: !this.state.open })}
          className="expander-header"
        >
          <h3 className='new-header-v2 '>
            {header}
          </h3>
          <span
          className='fas fa-times'
            style={{
              transform: this.state.open ? "rotate(0deg)" : "rotate(45deg)",
            }}
          />
        </div>
        <div>{this.props.children || "No data to show"}</div>
      </div>
    );
  }
}
