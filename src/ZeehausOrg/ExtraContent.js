import React, { Component } from "react";

class ExtraContent extends Component {
  state = {
    open: false,
  };
  render() {
    let { asList } = this.props;
    let props = this.props;
    let { open } = this.state;
    let closeLabel = props.closeLabel || "Learn More";
    let openLabel = props.openLabel || "Show less";
    let self = !Boolean(props.show && props.toggle);
    let isOpen = self ? open : props.show;
    let fullWidth = props.fullWidth;
    let small = this.props;
    return (
      <span
        style={{
          width: fullWidth ? "100%" : "",
          paddingLeft: !isOpen && asList ? "1.5rem" : "",
        }}
        className={isOpen ? "extra-content-open" : ""}
      >
        {!isOpen && (
          <button
            type="button"
            style={{ fontSize: small ? "14px" : "1rem", ...props.buttonStyle }}
            className="link extra-content-open-btn"
            onClick={() =>
              self ? this.setState({ open: !open }) : props.toggle()
            }
          >
            {closeLabel}
          </button>
        )}
        {isOpen && (
          <span>
            <button
              type="button"
              style={{
                fontSize: small ? "14px" : "1rem",
                ...props.buttonStyle,
              }}
              className="link extra-content-close-btn"
              onClick={() =>
                self ? this.setState({ open: !open }) : props.toggle()
              }
            >
              {openLabel}
            </button>
            {props.children}{" "}
          </span>
        )}
      </span>
    );
  }
}

export default ExtraContent;
