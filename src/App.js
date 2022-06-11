import React from 'react';
import { useState } from 'react';
import "./App.css";

const App = () => {
  const [gameStart, setGameStart] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [result, setResult] =useState("");

  let randomNumber = Math.round(Math.random()*100);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  if(randomNumber === userInput){setResult("Right on! Correct guess.")}
  else if(randomNumber > userInput){setResult("Your guess was higher than the number.")}
  else{setResult("Your guess was lower than the number.")}

  return (
    <div className='container'>
      <div className="form">
      
        <input type="number" placeholder='Enter your guess.' 
        onChange={handleChange} value={userInput}
        />
        {gameStart ? <div className='buttons'>
          <button>Submit guess</button>
        </div> : <button>New game</button>}
      </div>

      <div className="result">
        <h1>{result}</h1>
      </div>
    </div>
  )
}

export default App;