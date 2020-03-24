import React from 'react';
import MemoryCard from './components/MemoryCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Memory Game</h1>
        <h3 className="subtitle">Match Cards to win</h3>
      </header>
      <div className='row'>
        < MemoryCard />
        <MemoryCard />
        < MemoryCard />
        <MemoryCard/>
      </div>
      <div className='row'>
        < MemoryCard />
        < MemoryCard />
        <MemoryCard />
        <MemoryCard/>
      </div>
      <div className='row'>
        < MemoryCard />
        < MemoryCard />
        <MemoryCard />
        <MemoryCard/>
       </div>
    </div>
  );
}

export default App;
