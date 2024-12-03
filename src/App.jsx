import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputValue = useRef(null);
  const [randomNumber] = useState(() => parseInt(Math.random() * 11)); 
  const [message, setMessage] = useState(""); 
  console.log(randomNumber);

  function guessNumber() {
    const userInput = parseInt(inputValue.current.value);
    if (userInput === randomNumber) {
      setMessage("You found the number 🎉");
    } else if (userInput > randomNumber) {
      setMessage("Your number is bigger than my number");
    } else {
      setMessage("Your number is less than my number");
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Guess the Number</h1>
        <div className="wrapper">
          <input
            ref={inputValue}
            type="number"
            placeholder="Enter your number"
          />
          <button onClick={guessNumber}>Guess</button>
        </div>
        {message && <h2>{message}</h2>}
      </div>
    </>
  );
}

export default App;
