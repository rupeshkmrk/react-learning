import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionalClick";
import ClassClick from "./components/ClassClick";
function App() {
  return (
    <div className="App">

      <FunctionClick />
      <ClassClick />
      {/* <Counter /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
