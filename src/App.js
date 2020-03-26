import React, {Component} from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';

const generateDeck = () => {
  const symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`]
  const deck = []

  symbols.map(symbol => {
   return deck.push({
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
    deck: generateDeck(),
    pickedCards: []
  }
 
  render() {
    const cardsJsx = this.state.deck.map((card, index) => {
      return <MemoryCard/>
    })
    
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="title">Memory Game</h2>
          <h3 className="subtitle">Match Cards to win</h3>
        </header>
        <div className='row'>
          {cardsJsx.slice(0,4)}
        </div>
        <div className='row'>
        {cardsJsx.slice(4,8)}
        </div>
        <div className='row'>
        {cardsJsx.slice(8,12)}
        </div>
        <div className='row'>
        {cardsJsx.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
