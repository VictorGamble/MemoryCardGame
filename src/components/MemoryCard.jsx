import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  clickHandler = () => {
    this.setState({ isFlipped: true });
  };

  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    let { isFlipped } = this.props.isFlipped;
    isFlipped === true
      ? (memoryCardInnerClass = "MemoryCardInner flipped")
      : (memoryCardInnerClass = "MemoryCardBack");
    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img
              src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"
              alt="DC Logo"
            />
          </div>
          <div className="MemoryCardFront">
            <p>{this.props.symbol}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
