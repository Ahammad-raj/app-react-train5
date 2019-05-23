import React from 'react';
import logo from './logo.svg';
import './App.css';
import MySse from './components/my-sse/my-sse';
const style = {
  padding: 20,
  margin: "2em",
  border: "1px solid darkred",
  width: "30em",
  backgroundColor: "darkgoldenrod",
  fontStyle: "italic"

};
function App() {
  return (

     <div style={style}>    <MySse /> </div>

  );
}

export default App;
