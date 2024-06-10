import { useState } from 'react'
import './App.css'
import ScoreBoard from './Scoreboard'
import Cards from './Cards'
function App() {

  const pokemonName = [
    'zekrom', 'arceus', 'celebi', 'mew', 'pidove','rayquaza',
    'pikachu', 'lugia', 'ditto', 'emboar', 'mewtwo','zacian'
  ]

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className='container'>
      <ScoreBoard pokemonName={pokemonName}
        currentScore={currentScore}
        bestScore={bestScore}/>
      <Cards pokemonName={pokemonName}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}/>
    </div>
  )
}

export default App
