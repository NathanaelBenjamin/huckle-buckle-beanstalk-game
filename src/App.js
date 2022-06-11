import React from 'react';
import { useState } from 'react';
import "./App.css";

let randomNumber = Math.round(Math.random()*100);

const App = () => {

  const [gameStart, setGameStart] = useState(false);
  const[input, setInput] = useState("");
  const [result, setResult] = useState("");
  
  const handleChange = (event) => {
    if(event.target.value.length > 3){alert("Guesses must not be greater than 100!"); event.target.value = event.target.value.slice(0, 3); return;} 
    else{
      setInput(event.target.value);
    } 
  }

  

  

  const playgame = () => {
    console.log(randomNumber)
    let userGuess = parseInt(input);

    if(userGuess === randomNumber){
      setResult("Right! Correct guess!");
      setGameStart(true)
    }

    else if(userGuess > randomNumber){setResult("Oops! That was greater than the hidden number.")}

    else if(userGuess < randomNumber){setResult("Oops! That was lesser than the hidden number.")}
  }
  
  

  return (
    <div className='container'>
      <div className="game-body">
        <form>
          <input type="number" placeholder='Enter your guess.' required 
            onChange={handleChange}
          />
          {gameStart ? <button onClick={(event) => {event.preventDefault(); setGameStart(false)}}>Start game</button> : <button onClick={(event) => {event.preventDefault(); (input !== "") ? (input  > 100 ? playgame() : alert("Your guess should not be greater than 100.")) : alert("Error! Fill in your guess.")}}>Submit</button>}
        </form>

        <div className="result">
          {result}
        </div>
      </div>
    </div>
  )
}

export default App