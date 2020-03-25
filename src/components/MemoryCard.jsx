import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.state.isFlipped === false
      ? this.setState({ isFlipped: true })
      : this.setState({ isFlipped: false });
    alert(this.state);
  }

  render() {
    return (
      <div className="MemoryCard" onClick={this.clickHandler}>
        <div className="MemomryCardInner">
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
