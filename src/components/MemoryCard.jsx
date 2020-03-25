import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }

  clickHandler = () => {
    this.setState({ isFlipped: true });
    alert(this.state.isFlipped);
  };

  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    const { isFlipped } = this.state.isFlipped;
    isFlipped === true
      ? (memoryCardInnerClass = "flipped")
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
            <p>∆</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
