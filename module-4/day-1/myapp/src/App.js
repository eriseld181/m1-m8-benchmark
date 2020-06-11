import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from "./myComp"

const style = { color: "black" }
function App() {
  return (
    //jsx is similar to html class=>className
    // in html className will convert into class
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          hello man.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComp
          text="declared prop1 text"
          spaceship={6} />
        <MyComp
          text="declared prop2 text"
          spaceship={6} />
        <MyComp
          style={style}
          text="declared prop3 text" />
        <MyComp text="declared prop4 text" />
        <MyComp paragraph="declare a paragraph" />
        <a href="/">some text of anchor link</a>

      </header>
    </div>
  );
}

export default App;
