import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState('Here is some example text.');
  const [textOutput, setTextOutput] = React.useState('');
  const [mode, setMode] = React.useState('');

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleRadio = event => {
    setMode(event.target.value)
  }

  const lowercaseify = () => {
    setTextOutput(textInput.toLowerCase())
  };

  const uppercaseify = () => {
    setTextOutput(textInput.toUpperCase())
  }

  const handleSubmit = event => {
    event.preventDefault()
    if(mode === 'uppercaseify'){
      uppercaseify()
    } else if (mode === 'lowercaseify') {
      lowercaseify()
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <fieldset onChange={handleRadio}>
          <legend>Choose your mode:</legend>
          <input type="radio" id="upper-radio" value="uppercaseify"/>
          <label for="upper-radio">Uppercase-ify!</label>
          <input type="radio" id="lower-radio" value="lowercaseify"/>
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
