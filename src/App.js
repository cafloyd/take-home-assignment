import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [textOutput, setTextOutput] = React.useState('');

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmitLower = event => {
    event.preventDefault();
    setTextOutput(textInput.toLowerCase())
  };

  const handleSubmitUpper = event => {
    event.preventDefault();
    setTextOutput(textInput.toUpperCase())
  }

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form>
        <fieldset>
          <legend>Choose your mode:</legend>
          <input type="radio" id="upper-radio"/>
          <label for="upper-radio">Uppercase-ify!</label>
          <input type="radio" id="lower-radio"/>
          <label for="lower-radio">Lowercase-ify!</label>
        </fieldset>
        <label>
          <textarea onChange={handleChange} value={textInput}/>
        </label>
        <input type="submit" value="Do some magic!"/>
      </form>
      <div id="result">
        {textOutput}
      </div>
    </div>
  );
}

export default App;
