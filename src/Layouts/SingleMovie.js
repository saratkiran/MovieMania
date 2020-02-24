import React from "react";

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none"
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter(e) {
    this.setState({
      show: "block"
    });
  }

  handleMouseLeave(e) {
    this.setState({
      show: "none"
    });
  }
  render() {
    const { show } = this.state;
    const { item } = this.props;

    return (
      <div
        className={"singleCard " + (show === "block" ? "selected" : "")}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={item.img} alt={item.title} />
        <p className="singleCard_title">{item.title}</p>
        <div className="button_zone">
          <button
            className="button"
            style={{ display: show }}
            onClick={() => this.props.onClick(item.id)}
          >
            {this.props.button}
          </button>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
