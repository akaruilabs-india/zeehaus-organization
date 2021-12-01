import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type || 1,
      bold: props.bold || false,
      data: props.data || props.children || "This is a list",
      number: props.number || 0,
      style: props.style || {},
    };
  }
  renderList(type, bold, data, icon = "fa fa-arrow-circle-right") {
    let color = this.props.bulletColor;
    let tip = this.props.bulletTip;
    switch (type) {
      case 1:
        if (bold) {
          return (
            <div style={this.props.listStyle} className="list-container">
              <span
                data-tip={tip}
                style={{ color: color }}
                className={"bullet-pink " + icon}
              />
              <div className="list-para">
                <strong>{data}</strong>
              </div>
            </div>
          );
        } else {
          return (
            <div style={this.props.listStyle} className="list-container">
              <span
                data-tip={tip}
                style={{ color: color }}
                className={`bullet-pink ${
                  Boolean(icon) ? icon : "fa fa-arrow-circle-right"
                }`}
              />
              <div className="list-para">{data}</div>
            </div>
          );
        }
      case 2:
        if (bold) {
          return (
            <div style={this.props.listStyle} className="list-container-2">
              <span
                data-tip={tip}
                style={{ color: color }}
                className="fa fa-arrow-right bullet-dash"
              />
              <div className="list-para">
                <strong>{data}</strong>
              </div>
            </div>
          );
        } else {
          return (
            <div style={this.props.listStyle} className="list-container-2">
              <span
                data-tip={tip}
                style={{ color: color }}
                className="fa fa-arrow-right bullet-dash"
              />
              <div className="list-para">{data}</div>
            </div>
          );
        }
      case 3:
        if (bold) {
          return (
            <div style={this.props.listStyle} className="list-container-3">
              <span data-tip={tip} className="bullet-dot" />
              <div className="list-para">
                <strong>{data}</strong>
              </div>
            </div>
          );
        } else {
          return (
            <div style={this.props.listStyle} className="list-container-3">
              <span data-tip={tip} className="bullet-dot" />
              <div className="list-para">{data}</div>
            </div>
          );
        }
      case 4:
        if (bold) {
          return (
            <div style={this.props.listStyle} className="list-container-3">
              <span data-tip={tip} className="bullet-number">
                {this.state.number}
              </span>
              <div className="list-para">
                <strong>{data}</strong>
              </div>
            </div>
          );
        } else {
          return (
            <div style={this.props.listStyle} className="list-container-3">
              <span data-tip={tip} className="bullet-number">
                {this.state.number}
              </span>
              <div className="list-para">{data}</div>
            </div>
          );
        }
      case 5:
        if (bold) {
          return (
            <div
              style={this.props.listStyle}
              className="list-container-3 list-container-5"
            >
              <span data-tip={tip} className="bullet-dot" />
              <div className="list-para">
                <strong>{data}</strong>
              </div>
            </div>
          );
        } else {
          return (
            <div
              style={this.props.listStyle}
              className="list-container-3 list-container-5"
            >
              <span data-tip={tip} className="bullet-dot" />
              <div className="list-para">{data}</div>
            </div>
          );
        }
      case "space":
        if (bold) {
          return (
            <div
              style={this.props.listStyle}
              className="list-container-3 list-container-space"
            >
              <div className="list-para">
                <strong>{data}</strong>
              </div>
            </div>
          );
        } else {
          return (
            <div
              style={this.props.listStyle}
              className="list-container-3 list-container-space"
            >
              <div className="list-para">{data}</div>
            </div>
          );
        }
    }
  }
  render() {
    const { warn } = this.props;
    return (
      <div
        className={"zee-list " + this.props.className}
        style={this.state.style}
      >
        {warn ? (
          <div
            className="list-container"
            style={{ justifyContent: "flex-start" }}
          >
            <span
              className={"bullet-pink fa fa-exclamation-circle"}
              style={{ marginTop: 6 }}
            />
            <div className="zee-list-warn">
              {this.props.data || this.props.children}
            </div>
          </div>
        ) : (
          this.renderList(
            this.props.type || 1,
            this.state.bold,
            this.props.data || this.props.children,
            this.props.icon
          )
        )}
      </div>
    );
  }
}
export default List;
