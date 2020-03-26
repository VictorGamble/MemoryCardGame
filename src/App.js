import React, {Component} from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';
import { render } from '@testing-library/react';




class App extends Component{
  state = {
    deck: [],
    pickedCards: []
  }
  clickHandler = () => {
    this.setState({ isFlipped: true });
  };
  render() {
    
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
