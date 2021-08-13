import React, { useState } from 'react';
import './App.css';

function App() {
const [likes, setLikes] = useState(5)
const [value, setValue] = useState('Какой то текст')

function incriment () {
  setLikes(likes + 1 )
}

function decriment () {
  setLikes(likes - 1)
}

  return (
    <div className="App">
      <br/>
      <h2>{likes}</h2>
      <h1>{value}</h1>
      <input type='text' value={value} onChange={event => setValue(event.target.value)}></input>
      <button onClick = {incriment}>incriment</button>
      <button onClick = {decriment}>decriment</button>
    </div>
  );
}

export default App;
