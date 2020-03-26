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
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(generateDeck())

class App extends Component{
  state = {
    deck: generateDeck(),
    pickedCards: []
  }
 
  render() {
    const cardJSX = this.state.deck.map((card, index) => {
      return card.symbol
  })
  console.log(cardJSX)
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="title">Memory Game</h2>
          <h3 className="subtitle">Match Cards to win</h3>
        </header>
        <div className='row'>
          {cardJSX.slice(0,4)}
        </div>
        <div className='row'>
        {cardJSX.slice(4,8)}
        </div>
        <div className='row'>
        {cardJSX.slice(8,12)}
        </div>
        <div className='row'>
        <MemoryCard/>
        </div>
      </div>
    );
  }
}

export default App;
