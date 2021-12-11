import React, { Component } from "react";

class PopupPage extends Component {
  handleClick() {
    if (this.props.toggle) {
      this.props.toggle();
    }
  }
  componentWillReceiveProps(np) {
    if (np.open && !this.props.open) {
      document.body.classList.add("overflow-hidden");
    } else if (!np.open && this.props.open) {
      document.body.classList.remove("overflow-hidden");
    }
  }
  componentDidMount() {
    if (this.props.open) {
      document.body.classList.add("overflow-hidden");
    }
  }
  componentWillUnmount() {
    document.body.classList.remove("overflow-hidden");
  }
  render() {
    let {
      head,
      subHead,
      children,
      noCross,
      open,
      showBackIcon,
      small,
      insideDialog,
      innerChild,
    } = this.props;
    return open ? (
      <div className="popup-dialog popup-animation">
        <div className="popup-overlay" onClick={() => this.handleClick()} />
        <div
          className={small ? "popup-content" : "popup-content container"}
          style={{ minHeight: small ? "100%" : "" }}
        >
          <div className="popup-header">
            <div
              className="popup-head-container"
              style={{ borderBottom: !head ? "none" : "" }}
            >
              {head && <div className="popup-head">{head}</div>}
              {!head && (
                <div className="popup-head" style={{ color: "white" }}>
                  {"Popup page"}
                </div>
              )}
              {subHead && <div className="popup-subHead">{subHead}</div>}
            </div>
            {!noCross && (
              <div>
                {showBackIcon ? (
                  <div className="popup-back-button">
                    <button>
                      <span
                        className="fa fa-chevron-left"
                        onClick={() => this.handleClick()}
                      />
                      Back
                    </button>
                  </div>
                ) : (
                  <button
                    className="popup-close-button"
                    onClick={() => this.handleClick()}
                  >
                    <span
                      className="fas fa-times"
                    />
                  </button>
                )}
              </div>
            )}
          </div>
          {/* {console.log(insideDialog,'---------=======')} */}
          <div
            className={!insideDialog ? "popup-children" : "popup-height"}
            style={{ ...innerChild }}
          >
            {children}
          </div>
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

export default PopupPage;
