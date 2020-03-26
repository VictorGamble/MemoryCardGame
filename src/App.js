import React, {Component} from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { isFlipped: false };
  }
  clickHandler = () => {
    this.setState({ isFlipped: true });
  };
  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    let { isFlipped } = this.state;
    isFlipped === false
      ? (memoryCardInnerClass = "MemoryCardBack")
      : (memoryCardInnerClass = "MemoryCardInner flipped");
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="title">Memory Game</h2>
          <h3 className="subtitle">Match Cards to win</h3>
        </header>
        <div className='row'>
          < MemoryCard />
          <MemoryCard />
          < MemoryCard />
          <MemoryCard />
        </div>
        <div className='row'>
          < MemoryCard />
          < MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className='row'>
          < MemoryCard />
          < MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className='row'>
          < MemoryCard />
          < MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    );
  }
}

export default App;
