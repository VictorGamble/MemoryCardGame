import React, {Component} from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';

const generateDeck = () => {
  const symbols = [`∆`, ` ß`, `£`, `§`, `•`, `$`, `+`, `ø`]
  const deck = []
 
  for (let i = 0; i < 16; i++ ) {
    deck.push({
        isFlipped: false,
        symbol: symbols[i%8]
    });
};
   return deck
 }



const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log("shuffled deck =>",shuffle(generateDeck()))

class App extends Component{
  state = {
    deck: shuffle(generateDeck()),
    pickedCards: []
  }
 
  render() {
    const cardJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol = {card.symbol} isFlipped = {card.isFlipped} key = {index} />
  })
  console.log("cardJsx is =>", cardJSX)
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
        {cardJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
