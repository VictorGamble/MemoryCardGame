import React, {Component} from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';

const generateDeck = () => {
  const symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`]
  const deck = []

  symbols.map(symbol => {
    deck.push({
      symbol: symbol,
      isFlipped: false
    })
  })
  return shuffle(deck)
}


const shuffle = (array) => {
  const newArray = array.concat();
  newArray.sort(() => 0.5 - Math.random());
  return newArray;
}

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
