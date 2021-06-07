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

  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form>
        <label>
          <textarea onChange={handleChange} value={textInput}/>
        </label>
        <input type="submit" value="Lowercase-ify!" onClick={handleSubmitLower}/>
      </form>
      <div id="result">
        {textOutput}
      </div>
    </div>
  );
}

export default App;
